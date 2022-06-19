USE purgecss --help for more details 


purgecss -css css/expanded/main.css --content *.html  *.js --output css 

 while building the project   u should keep the css/expanded/main.css file as the main css file (under compling with sass)

 but in the end of the project while uploading the project to github you should run

 # purgecss -css css/expanded/main.css --content *.html  --output css 

to delete all unusable css (like unused classes) form bootstrap  and linked  the main.css file to the htlm
