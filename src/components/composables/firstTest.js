import { onMounted, ref, watch } from 'vue';
import _ from 'lodash';

export default function useFirstTest() {
  const testwaarde1 = ref(0);
  const testwaarde2 = ref(0);

  function optellen() {
    return (testwaarde1.value = testwaarde1.value + testwaarde2.value);
  }
  onMounted(() => {
    console.log('FirstTest', 'onMounted');
    testwaarde1.value = Math.floor(Math.random() * 10);
    testwaarde2.value = Math.floor(Math.random() * 10);
  });

  return {
    optellen,
    testwaarde1,
    testwaarde2,
  };
}
