<template>
  <div class="main-container" v-if="currentMenu.menuId">
    <!-- 上传/获取 -->
    <div class="upload-area">
      <el-upload
        class="upload-btn"
        :action="uploadUrl"
        :on-success="handleSuccess"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">上传图片</el-button>
      </el-upload>
      <el-button
        class="loader-btn"
        size="small"
        type="success"
        @click="getPicList"
        >加载图片</el-button
      >
    </div>
    <!-- 图片列表 -->
    <div class="img-area">
      <div v-for="(item, index) in imgSrcList" :key="index">
        <img :src="item.url" />
        <div>{{ item.caption }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { commonJs } from "../../const/index";
import eventBus from "../../utils/eventBus";

export default {
  name: "Main",
  data() {
    return {
      currentMenu: {
        menuId: "",
        menuNm: "",
      },
      uploadUrl: `${commonJs.URL}/pic/file/upload`,
      imgSrcList: [],
      fileList: [],
    };
  },
  mounted() {
    eventBus.$on("picMenuEmit", (data) => {
      this.currentMenu.menuId = data.menuId;
      this.currentMenu.menuNm = data.menuNm;
      this.getPicList();
    });
  },
  methods: {
    handleSuccess(response, file, fileList) {
      if (response.result) {
        this.$post(`${commonJs.URL}/pic/content/imgIdUpload`, {
          menuId: this.currentMenu.menuId,
          picId: response.result,
        }).then((res) => {});
      }
    },

    // 获取图片列表
    getPicList() {
      this.imgSrcList = [];
      this.$filePost(`${commonJs.URL}/pic/content/getImgList`, {
        menuId: this.currentMenu.menuId,
      }).then((res) => {
        try {
          res.forEach((item) => {
            var arr = new Uint8Array(item.img.data);
            let blob = new Blob([arr], { type: "application/octet-binary" });
            let url = window.URL.createObjectURL(blob);
            this.imgSrcList.push({ url: url, name: item.caption });
          });
          // var arr = new Uint8Array(res[0].img.data);
          // // let blob = new Blob([arr],{type: "application/octet-stream;chartset=UTF-8"});
          // let blob = new Blob([arr], {
          //   type: "application/octet-binary",
          // });
          // let url = window.URL.createObjectURL(blob);
          // this.imgSrc = url;
        } catch (error) {
          console.log(error);
        }
      });
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      // return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  .upload-area {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    .upload-btn {
      margin-right: 10px;
    }
  }
  .img-area {
    display: flex;
    flex-wrap: wrap;

    img {
      width: 200px;
      height: 200px;
      margin: 8px;
    }
  }
}
</style>
