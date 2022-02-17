import Request from "@/utils/request";

export default class Bookings {
  static create(payload) {
    return Request.post("/hotel-bookings", payload);
  }

  static update(id, payload) {
    return Request.put(`/hotel-bookings/${id}`, payload);
  }

  static delete(id) {
    return Request.delete(`/hotel-bookings/${id}`);
  }
}
