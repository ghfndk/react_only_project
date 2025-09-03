function App(){
    let header = 'IT 과목' ;
    let subject =['java','react','html','javascript','bootstrap','oracle'] ;

    let result = '';
    result +=`<h1>${header}</h1>` ;
    result += `<ul>` ;

    // 여기서 for 구문
    for(const iteam of subject){// for(타입 단수:복수)
        result += `<li>${iteam}</li>`;    
    }
    result += `</ul>` ;

    console.log(result);

    let result2 =``;
    result2 += `<ol>` ;

    for(const iteam of subject){
        result2 += `<li>${iteam}</li>`;
    }
    result2 += `</ol>`

    console.log(result2) ;

    // result2 변수에 <ol> 태그를 사용하여 순서가 있는 목록으로 만들기

    return(
        <div className="App">
            {/* 보안(xss 공격) 뗴문에 기본적으로 모든 내용을 문자열로 보여줍니다. */}
            {/* 문자열 형식으로 HTML 태그 형태로 렌더링하기 */}
            <div dangerouslySetInnerHTML={{__html :result}}/> 
            <hr/>{/* 1줄 추가 */}
            <div dangerouslySetInnerHTML={{__html :result2}}/>
        </div>
    );  
}

export default App ;