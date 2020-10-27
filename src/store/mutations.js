import {
  ADD_COUNT,
  ADD_TO_CAR
} from "./mutations-types"

export default {
  [ADD_COUNT](s, oldProduct) {
    oldProduct.count += 1;
  },
  [ADD_TO_CAR](s, payload) {
    payload.checked = true
    s.carList.push(payload)
  }
}
