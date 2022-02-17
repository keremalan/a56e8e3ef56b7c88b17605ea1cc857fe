import Request from "@/utils/request";

export default class Hotels {
  static fetchAll() {
    return Request.get("/hotels");
  }
  static fetchAllWithDetails() {
    return Request.get("/hotel-details");
  }
}
