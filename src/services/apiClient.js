import ResponseModel from '../models/ResponseModel';

const apiClient = {
  async get(url, params = {}) {
    try {
      // console.log(url);

      return new ResponseModel({
        success: true,

        data: [],
      });
    } catch (error) {
      return new ResponseModel({
        success: false,

        errors: [error.message],
      });
    }
  },
};

export default apiClient;
