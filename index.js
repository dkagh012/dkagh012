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

- Front-End  
  <img src="https://img.shields.io/badge/html5-black?style=for-the-badge&logo=html5&logoColor=#E34F26"> 
  <img src="https://img.shields.io/badge/javascript-black?style=for-the-badge&logo=javascript&logoColor=#F7DF1E"> 
  <img src="https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript&logoColor=#3178C6"> 
  <img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=#61DAFB"> 
  <img src="https://img.shields.io/badge/recoil-black?style=for-the-badge&logo=recoil&logoColor=#3578E5"> 

- Tools  
  <img src="https://img.shields.io/badge/figma-black?style=for-the-badge&logo=figma&logoColor=#F24E1E"> 
  <img src="https://img.shields.io/badge/git-black?style=for-the-badge&logo=git&logoColor=#F05032"> 

- Collaboration  
  <img src="https://img.shields.io/badge/notion-black?style=for-the-badge&logo=notion&logoColor=#000000"> 
  <img src="https://img.shields.io/badge/discord-black?style=for-the-badge&logo=discord&logoColor=#5865F2"> 

# 📕 Latest Blog Posts
${latestPosts}
`;

  writeFileSync("README.md", readmeContent, "utf8");
  console.log("README 업데이트 완료!");
})();
