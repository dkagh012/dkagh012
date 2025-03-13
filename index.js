import { writeFileSync } from "fs";
import Parser from "rss-parser";

const parser = new Parser({
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

(async () => {
  const feed = await parser.parseURL("https://dkagh054.tistory.com/rss"); // 본인의 블로그 RSS 주소

  let latestPosts = `<ul>`;
  for (let i = 0; i < Math.min(10, feed.items.length); i++) {
    const { title, link } = feed.items[i];
    latestPosts += `<li><a href="${link}" target="_blank">${title}</a></li>`;
  }
  latestPosts += `</ul>`;

  // 기존 README 내용
  let readmeContent = `
<div align="center">
  
![header](https://capsule-render.vercel.app/api?type=rounded&height=250&color=0:604586,100:516294&text=dkagh012%27S%20GITHUB&reversal=true&textBg=false&desc=FE%20DEVELOPER&descAlign=50&descAlignY=76&descSize=30&fontColor=ffffff&animation=twinkling)

</div>

<br/>

# 🪻 Profile 

<div align="center">
배정태(Bae Jeongtae, ペ・ジョンテ) <b>Front-End Developer</b><br/><br/>
</div>

# 👩🏻‍💻 Skills 

<div align="justify">
  
<br/>

- Front-End

<img src="https://img.shields.io/badge/html5-black?style=for-the-badge&logo=html5&logoColor=#E34F26"> 
<img src="https://img.shields.io/badge/javascript-black?style=for-the-badge&logo=javascript&logoColor=#F7DF1E"> 
<img src="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript&logoColor=#3178C6"> 
<img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=#61DAFB"> 
<img src="https://img.shields.io/badge/recoil-black?style=for-the-badge&logo=recoil&logoColor=#3578E5"> 
<img src="https://img.shields.io/badge/reactquery-black?style=for-the-badge&logo=reactquery&logoColor=#FF4154"> 
<img src="https://img.shields.io/badge/reacthookform-black?style=for-the-badge&logo=reacthookform&logoColor=#EC5990"> 
<img src="https://img.shields.io/badge/-styled--components-black?style=for-the-badge&logo=styledcomponents&logoColor=#DB7093"> 
<img src="https://img.shields.io/badge/css3-black?style=for-the-badge&logo=css3&logoColor=1572B6"> 
<img src="https://img.shields.io/badge/Sass-black?style=flat-square&amp;logo=Sass&amp;logoColor=white">

<br/>


- Tools

<img src="https://img.shields.io/badge/figma-black?style=for-the-badge&logo=figma&logoColor=#F24E1E"> 
<img src="https://img.shields.io/badge/git-black?style=for-the-badge&logo=git&logoColor=#F05032"> 
<img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=#181717"> 
<img src="https://img.shields.io/badge/postman-black?style=for-the-badge&logo=postman&logoColor=#FF6C37"> 


<br/>

- Collaboration

<img src="https://img.shields.io/badge/notion-black?style=for-the-badge&logo=notion&logoColor=#000000"> <img src="https://img.shields.io/badge/discord-black?style=for-the-badge&logo=discord&logoColor=#5865F2"> <img src="https://img.shields.io/badge/slack-black?style=for-the-badge&logo=slack&logoColor=#4A154B"> 

</div>

<br/>


<a href="https://github.com/ashutosh00710/github-readme-activity-graph">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=dkagh012&theme=react-dark&bg_color=20232a&hide_border=true&line=8A87D0&color=a888f7" width=98%/>
</a>


# 📕 최근 블로그 글
${latestPosts}
`;

  writeFileSync("README.md", readmeContent, "utf8");
  console.log("README 업데이트 완료!");
})();
