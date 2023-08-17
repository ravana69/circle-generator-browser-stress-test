 const c = document.getElementById("gameCanvas");
            const ctx = c.getContext("2d");
            document.querySelector("button").addEventListener("click", yikes);
           /* ctx.beginPath();
            ctx.arc(100, 75, 50, 0, 2 * Math.PI);
            ctx.stroke();*/
            const GAME_SPEED = 30;
            let = circles=0;
            
            function yikes(){
            document.querySelector("button").style.display="none";
            for(let i=0; i<300; i++){
                circles++;
                document.querySelector("h2").textContent='Circles: '+circles;
                 let y = Math.floor(Math.random()*1080);
                 let x = Math.floor(Math.random()*1920);
                 let r = Math.floor(Math.random()*256);
                 let g = Math.floor(Math.random()*256);
                 let b = Math.floor(Math.random()*256);
                 let s_r = Math.floor(Math.random()*256);
                 let s_g = Math.floor(Math.random()*256);
                 let s_b = Math.floor(Math.random()*256);
                 let s_y = Math.floor(Math.random()*10);
                 let s_x = Math.floor(Math.random()*10);
                 let radius = Math.floor(Math.random()*10);
                 let width = Math.floor(Math.random()*10);
                 let o = Math.random();
                 let s_o = Math.random();
                 ctx.beginPath();
                 ctx.shadowColor = "black";
                 ctx.shadowBlur = 6;
                 ctx.shadowOffsetX = s_x;
                 ctx.shadowOffsetY = s_y;
                 ctx.shadowColor = "rgba(" + s_r + "," + s_g + "," + s_b + "," + s_o + ")";
                 ctx.strokeStyle = "rgba(" + r + "," + g + "," + b + "," + o + ")";
                 ctx.arc(x, y, radius, 0, 2 * Math.PI);
                 ctx.lineWidth = width;
                 ctx.stroke();
                 if(i<1){
                    
                    setTimeout(() => {
                        i=0;
                        yikes();
                    }, 10);
                 }
              }
            }