import {
  ADD_COUNT,
  ADD_TO_CAR
} from "./mutations-types"


export default {
  addCar(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.carList.find(item => item.iid == payload.iid)
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct)
        resolve("增加了数量~")
      } else {
        context.commit(ADD_TO_CAR, payload);
        resolve("添加商品成功!")
      }
    })
  }
}
