git test
1. 아래와 같은 상황에서 f1 branch를 master에 merge하기 위한 명령어들을 기술하세요.
```
git merge o/f1
git rebase master
git checkout master
git merge f1
```
<br/>

2. Git에서 다음 파일은 어떤 상태를 의미하는지 stage, HEAD, 디렉토리의 관점에서 설명하세요 (프로 깃 ver2)
- Unmodified (Clean)
    - remote 디렉토리와 local 디렉토리가 같은 상태임을 의미한다. commit 한 직후

- Untracked
    - add 되기 전의 상태. 파일이 아직 stage 에 올라가기 전으로, local 디렉토리 에서만 새로운 파일이 생성된 상태이다.

- New
    - ? git add 된 상태

- Modified
    - stage 에 올라간 이후, remote 디렉토리와 차이가 발견되었을 때, modified 된 상태로 나타난다.

- Staged
    - stage 위에 올라가 있는 상태를 말한다. 

<br/>

3. Git의 Object 종류에 대해 나열하고 설명하시오. 이 중 가장 중요한 객체는 무엇인가? 이유는?
- commit, block, tree... 

<br/>

4. 고양이는 같은 내용의 4KB짜리 파일을 10개 만들어서 여러 디렉토리에 복사한후 Add –commit 하였다. 이때 Git 저장소에는 blob 오브젝트가 몇 개 생기는가?
- 1개 생긴다. 내용 별로 해쉬가 같기 때문에, 같은 내용이라면 같은 해쉬로 한 오브젝트로 생성된다.

<br/>

5. 문어는 같은 내용의 4KB 파일을 서로 다른 브랜치 10개에 중복 저장하였다. 이때 Git 저장소에는 blob 오브젝트가 몇 개 생기는가?
- 1개가 생성된다
 
<br/>

6. 브랜치를 새로 만들면 전체Git 저장소의 용량은 얼마 증가할까?
- 브랜치는 참조값이기 때문에 저장소의 용량은 거의 증가하지 않는다. => 40byte

<br/>

7. Rebase와 merge의 차이에 대해 기술하시오
- rebase는 base 를 다시 설정하는 것으로, rebase 다음에 입력되는 파라미터 기준으로 base 가 설정되어 옮겨지게 된다. rebase는 분기되었던 브랜치를 설정된 base기준으로 한줄로 합쳐 재구성 하게 한다. 
merge 는 merge 다음에 입력되는 파라미터를 가져와 현재 브랜치 기준으로 합쳐진다. merge 하는 과정에서 분기된 브랜치는 그대로 유지되며, 두 브랜치 사이에서 제거되거나 추가된 내용들이 한 파일로 합쳐지게 된다.

<br/>

8. Rebase와 merge 중 충돌 처리가 쉬운 쪽은 어느 쪽인가? 이유는?
- merge는 각각의 브랜치의 끝과 끝만 비교가 되기 때문에 충돌처리가 쉽지 않다. 하지만 rebase는 기준점을 중심으로 단계별로 브랜치가 재구성이 되기 때문에 충돌을 처리하기 쉽다.
한번 충돌 해결을 하면 된다.

<br/>

9. Git stash 명령에 대해 설명하시오
- 모르겠다..ㅠㅠ

<br/>

10. Hard reset, soft reset, mixed reset 의 차이점에 대해 설명하시오.
- hard 는 강력하다. soft 는 덜 강력하다.... 어느 부분에서 차이가 있을 까.... 이고잉 님은 hard 를 쓸때 조심하라고 하셨는데, 왜 조심하라 했는지 말씀해주시지 않았다...


