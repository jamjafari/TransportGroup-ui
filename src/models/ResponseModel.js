export default class ResponseModel {
  constructor({
    success = true,

    data = null,

    message = '',

    errors = [],

    page = 1,

    pageSize = 20,

    totalCount = 0,

    extra = {},
  } = {}) {
    this.success = success;

    this.data = data;

    this.message = message;

    this.errors = errors;

    this.page = page;

    this.pageSize = pageSize;

    this.totalCount = totalCount;

    this.extra = extra;
  }
}
