#Git과 Github 요약정리

##Git
-Git 은 형상관리 도구 이다. 
-git init : git과 연결이 된다. 로컬 껍데기가 생긴다.
-DVCS 버전관리 프로그램이라 할 수 있다.
-Git을 사용하는 이유 : 협업할 때 사용, 이전버전으로 되돌아갈 수 있음, 이력관리, 잘못한 범인 찾기
-git 에 있는 디렉토리 : work dir, stage, local dir, remote dir
> work dir : 파일 소스코드 편집
> git add : work dir 에서 스테이지에 추가한다.
> stage : commit을 준비하는 곳
> git commit : 한번 커밋을 하면 로컬 저장소에 안전하게 저장이 된다. Stage 의 내용들을 가지고 commit 객체를 만드는 행동 (git commit 의 내용은 자세하게 적는다)
> local dir : .git 에 커밋된 내용이 저장이 된다.
> remote dir : push 된 내용이 들어간다.
> pull : fetch 와 merge 가 같이 일어난다. 원격과 로컬, 작업, 스테이지가 동일한 상태가 됨.
> fetch : 원격과 로컬의 동기화
> merge : 두 커밋을 합쳐서 새로운 커밋을 만든다. 커밋이 남아있다.
> rebase : 다른 커밋을 만든다. 커밋이 날라간다. (!=merge)
> reset : 브랜치와 헤드를 모두 변하게 한다.
> checkout : 헤드가 변한다. Work dir 이 같이 변한다.
> branch : 참조 객체

-status 가 깨끗할 때, workspace 와 stage 와 local과 같을 때를 말한다.
-Git 연결 해제 : rm -rf .git


## Github
-fork
> 타겟 프로젝트의 저장소를 자신의 저장소로 fork 한다
-clone, remote 설정
‘’’
git clone https://github.com/wayhome25/blog.github.io.git
‘’’
‘’’
# 원본 프로젝트 저장소를 원격 저장소로 추가
$ git remote add real-blog(별명) https://github.com/원본계정/blog.github.io.git

# 원격 저장소 설정 현황 확인방법
$ git remote -v
‘’’

-branch 설정
>자신의 로컬 피시에 branch를 만든다
‘’’
# develop 이라는 이름의 branch를 생성한다.
$ git checkout -b develop
Switched to a new branch 'develop'

‘’’

-add, commit, push
‘’’
# develop 브랜치의 수정 내역을 origin 으로 푸시한다.
$ git push origin develop
‘’’

-push 완료 후 Compare & pull reqeust 버튼 을 누른다.

- 코드리뷰, Merge Pull Reqest
> PR을 받은 원본 저장소 관리자는 코드 변경내역을 확인하고 Merge 여부를 결정한다.

- Merge 이후 동기화 및 branch 삭제
‘’’
# 코드 동기화
$ git pull 별명 -t 브랜치이름
# 브랜치 삭제
$ git branch -d develop(브랜치 별명)

‘’’



* 프로 깃 책 읽기!
