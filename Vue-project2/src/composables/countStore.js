import { ref } from "vue";

const countValue = ref(0);
export function controlData() {
  const innerValue = ref(10);
  const incrementCounter = () => {
    innerValue.value++;
  };
  return { innerValue, incrementCounter };
}

export default countValue;
