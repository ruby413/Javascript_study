
# AWS 공부하기
---

## 생활코딩
- https://opentutorials.org/course/2717
- 쉽고 좋음
---
## 피라시스
- https://pyrasis.com/aws.html
- 오래됐지만 기본적인 내용은 유효
---
## AWS 공식문서
- https://docs.aws.amazon.com/ec2/index.html
- 가능하면 영문으로 보는게 좋다.
---
## 백서
- https://aws.amazon.com/ko/whitepapers/?nc2=h_ql_exm
- 기술적으로 다소 깊은 내용을 포함
---
## AWS well architected
- https://aws.amazon.com/ko/architecture/well-architected/
- 모범사례(best practice)
- 강추!
---
## AWS 자격증
- https://aws.amazon.com/ko/certification/certified-solutions-architect-associate/
- https://acloud.guru/pricing
---
## AWS Infra
https://aws.amazon.com/ko/about-aws/global-infrastructure/
https://aws.amazon.com/ko/cloudfront/features/
- 리전: AZ의 집합, 서비스의 단위
- AZ: 논리적 데이터 센터
- 엣지 로케이션: CDN 서비스 제공, AZ보다 숫자가 훨씬 많다. 2019년 기준 190개
---
## AWS 서비스 구분
- 글로벌 서비스: 엣지 로케이션에서 제공, 매우 안정적
- 리전 서비스: AZ에 독립적, 안정성과 내구도가 보통 높다.
- AZ 기반 서비스: 주로 EC2 관련 서비스들
---
## 글로벌 서비스
- 클라우드 프론트: CDN
- Route53: DNS
- IAM: 계정관리 서비스
---
## 리전 서비스
- 관리형 서비스
- 개발자/사용자의 관리 부담을 덜어주는 서비스들
- 보통 가용성과 내구성이 높다
- AZ에 장애가 발생해도 일반적으로 서비스 가능
- S3, VPC, RDS, DynamoDB, Lambda, ....
- EBS 스냅샷, AMI
- 상대적으로 안전하다
---
## AZ 기반 서비스
- 한 AZ에 귀속되는 서비스들
- 주로 EC2 관련
- EC2, EBS, ENI, 서브넷
- 장애 발생 가능성이 높다
---
## 주요 서비스 살펴보기
- 컴퓨팅
- 스토리지
- 네트워크
- 분석
- 배포
- 기타
---
### 컴퓨팅
- EC2: 서버
- Lambda: 서버리스 코드 실행기
- LightSail: Heroku 유사 플랫폼, 매우 저렴하고 사용하기 쉽다.
- ECR, ECS, EKS: 관리형 컨테이너 서비스
- Elastic Beanstalk: 운영 부담 줄이고 간단 배포
---
### 스토리지
- S3: AWS의 대표 서비스, 인터넷 파일 저장소
- EFS: EC2를 위한 NFS
- S3 Glacier: 콜드 저장소, 매우 저렴
---
### 데이터베이스
- RDS: 관리형 RDBMS 서비스
- DynamoDB: 관리형 NoSQL 디비, 세션DB나 서버리스 용으로 사용
- ElasticCache: 관리형 Redis
- RedShift: 컬럼스토어, SQL 사용한 분석DB, 비싸고 빠르다
---
### 개발 툴
- CodeStar: 깃헙 연동 쉬운 배포 툴
- CodeCommit: AWS 제공 비공개 Git 저장소
- CodeBuild / Deploy: 강력한 빌드 / 배포 도구
- CodePipeline: AWS 및 외부툴 연동형 DevOps 도구
---
### 운영 및 가버넌스(Governace)
- AWS Organizations: 여러 계정 관리
- CloudWatch: 모니터링 툴, 필수적!
- AWS Auto Scaling: 자동으로 인스턴스 확장 및 축소
- CloudFormation: Infra as a Code 코드로 인프라 관리
- CloudTrail: AWS 사용자 추적
- Trust Advisor: AWS 운영 검토 및 개선 제안
---
## Analytics
- Athena: 빅데이터 (페타바이트) 분석 툴
- EMR: AWS 관리형 하둡 서비스
- Elasticsearch: 검색엔진
- Kinesis: 리얼타임 데이터, 시계열데이터 수집 / 가공 / 분석
---
## 보안 운영
- IAM: 계정 관리 서비스
- Cognito: 개발앱을 위한 쉬운 로그인 서비스 제공
- KMS: 키 암호화 서비스 제공
---
## 모바일
- Amplify: 모바일 개발에 필요한 모든 것이 들어 있다!
- AppSync: DB + GraphQL 연동을 쉽게 해 줌
---
## 어플리케이션 및 기타
- SQS: 큐 서비스, 비동기 처리
- SNS: 알림 서비스
- Simple Email: 이메일 발송용 서비스
---
## 핵심 서비스들
- Route 53
- EC2, ELB, Auto Scaling
- VPC
- RDS
- S3
- Lambda
- CloudWatch, IAM
```
화요일 (종일 수업)
- Redis, EC2, S3, Lambda



