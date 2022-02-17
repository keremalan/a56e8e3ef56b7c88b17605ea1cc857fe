import Request from "@/utils/request";

export default class Coupons {
  static fetchAll() {
    return Request.get("/coupons");
  }
  static fetchViaCode(action) {
    return Request.get(`/coupons?code=${action}`);
  }
}
