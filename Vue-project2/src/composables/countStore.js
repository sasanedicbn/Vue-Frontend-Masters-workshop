import { ref } from "vue";

// const countValue = ref(0);
export default function controlData(initialValue = 10) {
  const innerValue = ref(initialValue);

  const incrementCounter = () => {
    innerValue.value++;
  };
  return { innerValue, incrementCounter };
}

// export default countValue;
