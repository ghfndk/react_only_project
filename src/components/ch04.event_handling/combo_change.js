import React, { useState } from "react";

function App() {
    const [htmlContent, setHtmlContent] = useState("");


    const ClickEvent = (event) => {
        console.log(`해당 요소의 아이디 : ${event.target.id}`);

        const myid = event.target.id;

        if (myid === 'bread') {
            console.log('빵');
            let header = '빵';
            let subject = ['크로아상', '브리오슈', '바게트'];

            let result = `<h1>${header}</h1><ul>`;

            for (const iteam of subject) {
                result += `<li>${iteam}</li>`;
            }
            result += `</ul>`;
            setHtmlContent(result);
        } else if (myid === 'juice') {
            const header = "음료수";
            const drinks = ["아메리카노", "바닐라 라뗴", "와인"];

            let result = `<h1>${header}</h1><ol>`;
            for (const drink of drinks) {
                result += `<li>${drink}</li>`;
            }
            result += `</ol>`;

            setHtmlContent(result);
        } else {
            setHtmlContent("<h1>기타</h1><p>선택되지 않았습니다.</p>");
        }
    };




    return (
        <div>
            <h2>선택 사항</h2>
            <button id="bread" onClick={ClickEvent}>빵</button>
            <button id="juice" onClick={ClickEvent}>음료수</button>
            <br />
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>

    );
}

export default App;