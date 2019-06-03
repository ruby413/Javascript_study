const solution = (s, n) => { 
    var result = "";  
    for (var i=0; i<s.length;i++) { 
        if ( s[i] == ' ' ) 
            result += ' ' 
        else 
            result += String.fromCharCode( 
                (s.charCodeAt(i)>90)? (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 ) 
        } 
    return result; 
}