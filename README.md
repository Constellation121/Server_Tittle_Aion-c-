🚀 **Join our community:**  
[![Join Discord](https://img.shields.io/badge/Discord-Join%20Now-5865F2?style=for-the-badge&logo=discord)](https://discord.gg/bJZyeezspg)
 Server_Tittle_Aion 
 "Server_Tittle_Aion for C++ server in Node.js"
Aion 3.5 PTS
Aion 4.6 PTS
Aion 5.8 PTS
Aion 7.7 PTS

<img width="328" height="115" alt="image" src="https://github.com/user-attachments/assets/98d2e159-fe75-4c4f-84ee-b889dc55e30e" />

tep-by-Step Tutorial: Custom Title Configuration​
Step 1​
First, enter the 0_1.xml file inside the Server_Tittle_Aion folder. Edit it here with the following structure:
<channel>
<item>
<item>
<title> [CM] Ozzy </title>
<titleDescription>Staff</titleDescription>
<charId>xxx</charId>
<category>Staff</category>
<charName>Viola</charName>
<skintype>1</skintype>
</item>
Your character name: "Viola"
CharId: "11111"

You will find this in your database.


Step 2​
Go to the client side and find it in L10N.


Edit the block below, changing the link to yours:

<string>
<id>903159</id>
<name>STR_BTITLE_SERVER_AND_TITLE_RSS</name>
<body> http://192.168.200.7:90/0_1.xml </body>
</string>

<string>
Edit http://192.168.200.7:90/0_1.xml with your machine IP where the server is or the .com domain.
