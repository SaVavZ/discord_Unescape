<!DOCTYPE javascript>

//UNESCAPE BY ALEX
function start_unescape(){
    setInterval(function(){
        var Messages1 = document.getElementsByClassName('markup-2BOw-j da-markup messageContent-2qWWxC da-messageContent');
        var Messages2 = document.getElementsByClassName('markup-2BOw-j messageContent-2qWWxC');

        for(var i=0; i < Messages1.length; i++){
            var Msg = Messages1[i]
            if( Msg.Edited != 1 ){
                var MesageDump = Msg.innerHTML;
                MesageDump = MesageDump.replace(/&lt;/g, '<');
                MesageDump = MesageDump.replace(/&gt;/g, '>');
                MesageDump = MesageDump.replace(/\/%3E/g, '>');
                MesageDump = MesageDump.replace(/\/%27%3E/g, '\'>');
                MesageDump = MesageDump.replace(/\/%27%22%3E/g, '\'">');

                Msg.innerHTML = MesageDump;
                Msg.Edited = 1;
            }
        }  

        for(var i=0; i < Messages2.length; i++){
            var Msg = Messages2[i]
            if( Msg.Edited != 1 ){
                var MesageDump = Msg.innerHTML;
                MesageDump = MesageDump.replace(/&lt;/g, '<');
                MesageDump = MesageDump.replace(/&gt;/g, '>');
                MesageDump = MesageDump.replace(/\/%3E/g, '>');
                MesageDump = MesageDump.replace(/\/%27%3E/g, '\'>');
                MesageDump = MesageDump.replace(/\/%27%22%3E/g, '\'">');

                Msg.innerHTML = MesageDump;
                Msg.Edited = 1;
            }
        }  

    },1500)
}
