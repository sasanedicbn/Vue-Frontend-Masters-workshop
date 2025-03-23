import { ref } from "vue";

const countValue = ref(0);
export const incrementCounter = () => countValue.value++;

export default countValue;
