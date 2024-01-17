// assignment :

// You are the developer behind the air conditioner
// However, some customers have a better heating system
// You are going to adjust your current function so that it takes one more
// parameter.

// This parameter will be a function that +3 to temperature
// Change the first while loop to use the new incrementTemperature parameter
// Implement the incrementTemperature function yourself

function airConditioning(currentTemperature, incrementTemperature) {
  const MAX_TEMP = 50;

  console.log(`currentTemperature : ${currentTemperature}`); //-2
  currentTemperature = incrementTemperature(currentTemperature, 3);
  console.log(`currentTemperature now : ${currentTemperature}`); //1

  while (currentTemperature > MAX_TEMP) {
    currentTemperature -= 2;
    console.log(currentTemperature);
  }
}

function fu(currentTemperature, num) {
  const MIN_TEMP = 10;
  while (currentTemperature < MIN_TEMP) {
    currentTemperature += num;
    console.log(currentTemperature, num);
  }
  return currentTemperature;
}

airConditioning(-2, fu);

// 1. 동기 (synchronous) : 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식 - 순차적 로직흐름
// 2. 비동기 (Asynchronous): 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식
// - 동시 효율적 처리 가능, 즉시 응답X 때문에 예상 밖 결과 나올수도 있음.

// 콜백함수는 때로는 가독성이나 코드 재사용 면에서도 사용 된다.
// 비동기 방식으로 작성된 함수를 동기 처리하기 위해 필요 하다
