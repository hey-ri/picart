//페이지 로드 이벤트
/* 도큐먼트.레디 하면 바로 이미지가 안떴음 그래서 로딩을 먼저 해줘야함 */
window.addEventListener('load',()=>{
    const grid = new Isotope('section',{//배치 할 요소를 감싸고 있는 부모명
        itemSelector : 'article', //배치할 요소명
        columnWidth : 'articel', //넓이 값을 구할 요소명
        transitionDuration : '0.5s' //화면 재배치 시 요소가 움직이는 속도
    });

   //클릭한 모든 버튼 변수에 저장
   const btns = document.querySelectorAll('main ul li')

   //버튼의 갯수만큼 반복해서 무언가를 할것임
   for(let el of btns){
        el.addEventListener('click',e=>{
            e.preventDefault();
            //변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장
            const sort= e.currentTarget.querySelector('a').getAttribute('href');

            //그리드에 저장된 결과값을 불러와 재정렬 기능 연결
            grid.arrange({//이소토프에 있는 속성값을 사용중ㅇ임
                //옵션 값으로 sort 변수값 지정
                filter : sort
            });

            //다시 모든 버튼의 개수만큼 반복해서
            for( let el of btns){
                el.classList.remove('on')
            }

            //클릭한 대상만 선택해서 클래스명 on을 추가해 활성화
            e.currentTarget.classList.add('on')
            });
        };
    });



