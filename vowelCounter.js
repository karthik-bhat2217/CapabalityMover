function count() {
    let name = document.getElementById('User_Enter').value;
    let c=0;
    for(let i=0;i<name.length;i++){
        if(name.charAt(i)=='a'||name.charAt(i)=='e'||name.charAt(i)=='i'||name.charAt(i)=='o'||name.charAt(i)=='u')
        c++;
        if(name.charAt(i)=='A'||name.charAt(i)=='E'||name.charAt(i)=='I'||name.charAt(i)=='O'||name.charAt(i)=='U')
        c++;
    }
    document.getElementById('vowels').innerHTML = "<font color='green'>Number of Vowels :</font> " 
 + c;
}