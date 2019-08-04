
#include <iostream> 
using namespace std;

long long solution(int a, int b) {
    
    long long resultnum = 0;
    if (a < b) {
        for ( int i=a; i<=b; i++ ){
            resultnum= resultnum+i;
        };
        return resultnum;
    }else if(a > b){
        for ( int i=b; i<=a; i++ ){
            resultnum= resultnum+i;
        };
        return resultnum;
    }else{
        return a;
    }
}

int main() {
    
    int firstnum;
    int lastnum;
    long long resultnum = 0;
    
    cin >> firstnum >> lastnum;
    cout << solution(firstnum,lastnum) << endl;

    
    
    return 0;
    
    
}


