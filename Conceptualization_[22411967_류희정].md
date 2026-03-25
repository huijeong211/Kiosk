# Conceptualization

<img width="681" height="684" alt="Logo" src="https://github.com/user-attachments/assets/0c3d33b1-5ebe-4db8-88f2-00d4becf1be1" />


## Beverage Kiosk System

Student No. 22411967
Name 류희정
E-mail wisebestgirl@naver.com 


---

## [ Revision history ]

| Revision date | Version | Description | Author |
|--------------|--------|------------|--------|
| 2026.03.25 | 1.0.0 | First Draft | 류희정|

---

# = Contents =

1. Business purpose  
2. System context diagram  
3. Use case list  
4. Concept of operation  
5. Problem statement  
6. Glossary  
7. References  

---

# 1. Business purpose

## 1) Project background

최근 카페 및 음료 매장에서 무인 주문 시스템(키오스크)의 사용이 빠르게 증가하고 있다. 정보통신 기술의 발전과 함께 비대면 서비스에 대한 수요가 증가하면서, 많은 매장에서 키오스크를 도입하여 주문 방식을 자동화하고 있다. 특히 대형 프랜차이즈 카페의 경우 키오스크와 기존 직원 주문 방식을 병행하여 운영함으로써 주문 처리 속도를 높이고, 인건비를 절감하는 효과를 얻고 있다.

이러한 변화는 매장 운영의 효율성을 높이는 데 긍정적인 영향을 주고 있으나, 모든 사용자에게 동일한 수준의 편의성을 제공하지는 못하고 있다. 특히 고령층 사용자나 디지털 기기에 익숙하지 않은 사용자들은 키오스크 사용 과정에서 어려움을 겪는 경우가 많다. 현재의 키오스크는 터치 기반 인터페이스를 사용하며 다양한 메뉴와 옵션을 포함하고 있기 때문에, 처음 사용하는 사용자에게는 구조가 복잡하게 느껴질 수 있다.

이러한 문제를 해결하기 위해서는 사용자 중심 설계를 기반으로 한 키오스크 시스템이 필요하다. 즉, 다양한 연령대와 사용 경험을 가진 사용자들이 직관적으로 이해하고 사용할 수 있도록 인터페이스를 단순화하고, 불필요한 과정을 최소화하는 방향으로 개선해야 한다.

본 프로젝트는 이러한 요구를 반영하여, 누구나 쉽게 사용할 수 있는 음료 주문 키오스크 시스템을 설계하고 구현하는 것을 목표로 한다. 특히 직관적인 UI/UX 설계를 통해 사용자의 인지 부담을 줄이고, 빠르고 정확한 주문이 가능하도록 한다. 또한 주문 과정의 단계를 최소화하고, 오류 발생 시 쉽게 수정할 수 있는 기능을 제공하여 전반적인 사용자 경험을 향상시키고자 한다.

이를 통해 본 시스템은 매장 운영의 효율성을 높이는 동시에, 다양한 사용자 계층을 고려한 보다 포괄적인 키오스크 서비스를 제공하는 것을 궁극적인 목표로 한다.

## 2) Goal

- 음료 주문 과정을 자동화하는 키오스크 시스템 개발  
- 사용자 친화적인 인터페이스 제공  
- 주문 처리 속도 향상 및 오류 감소  
- 매장 운영 효율성 향상  

## 3) Target Market

- 카페 및 음료 매장을 이용하는 고객들과 판매자들을 대상으로 한다.  


---

## 2. System context diagram

본 시스템은 음료 주문을 위한 키오스크 시스템으로, 사용자와 외부 시스템 간의 상호작용을 포함한다.

구성 요소는 다음과 같다:

- Customer: 키오스크를 이용하여 음료를 주문하는 사용자
- Kiosk System: 사용자 인터페이스 및 주문 처리 기능을 제공하는 시스템
- Payment System: 카드 및 간편 결제를 처리하는 외부 결제 시스템
- Store Server: 주문 정보 및 메뉴 데이터를 저장하고 관리하는 서버
- Manager: 메뉴 및 주문 데이터를 관리하는 관리자
Customer는 Kiosk System을 통해 메뉴를 조회하고 주문 및 결제를 수행하고, Kiiosk System은 Payment System과 연동하여 결제를 처리하며, Store Server와 통신하여 주문데이터를 저장 및 관리한다.
Manager은 Store Server을 통해 메뉴 및 주문 내역을 관리한다.

---

## 3. Use case list

### 1) View Menu
Actor  
Customer  

Description  
사용자가 키오스크 화면에서 전체 음료 메뉴를 조회한다.

---

### 2) Select Menu
Actor  
Customer  

Description  
사용자가 원하는 음료를 선택한다.

---

### 3) View Menu Detail
Actor  
Customer  

Description  
선택한 음료의 상세 정보(가격, 옵션 등)를 확인한다.

---

### 4) Customize Menu
Actor  
Customer  

Description  
사용자가 음료의 옵션(사이즈, 당도, 얼음 양 등)을 설정한다.

---

### 5) Check Quantity
Actor  
Customer  

Description  
사용자가 주문할 음료의 수량을 선택한다.

---

### 6) Add to Order
Actor  
Customer  

Description  
선택한 음료를 주문 목록에 추가한다.

---

### 7) Confirm Order
Actor  
Customer  

Description  
사용자가 현재까지 선택한 주문 내역을 확인한다.

---

### 8) Make Payment
Actor  
Customer  

Description  
사용자가 주문에 대한 결제를 진행한다.

---

### 9) Confirm Payment
Actor  
Customer, Payment System  

Description  
결제 시스템을 통해 결제 성공 여부를 확인한다.

---

### 10) View Receipt
Actor  
Customer  

Description  
결제 완료 후 영수증 내용을 화면에서 확인한다.

---

### 11) Print Receipt
Actor  
Customer  

Description  
사용자가 영수증 출력을 요청한다.

---

### 12) Cancel Payment
Actor  
Customer  

Description  
결제 진행 중 또는 완료 후 결제를 취소한다.

---

### 13) Confirm Cancel Payment
Actor  
Customer, Payment System  

Description  
결제 취소가 정상적으로 처리되었는지 확인한다.

---

### 14) Manage Menu
Actor  
Manager  

Description  
관리자가 메뉴를 추가, 수정 또는 삭제한다.

---

### 15) View Order History
Actor  
Manager  

Description  
관리자가 전체 주문 내역을 조회한다.  

---

# 4. Concept of operation

## 4. Concept of operation

### 1) View Menu

Purpose  
사용자가 전체 음료 메뉴를 확인하기 위함  

Approach  
키오스크 메인 화면에서 메뉴 목록을 표시하고, 사용자는 터치를 통해 메뉴를 탐색한다.  

Dynamics  
키오스크 초기 화면 진입 시  

Goals  
사용자가 쉽게 메뉴를 확인할 수 있도록 한다.  

---

### 2) Select Menu

Purpose  
사용자가 원하는 음료를 선택하기 위함  

Approach  
사용자가 화면에 표시된 메뉴를 터치하여 선택한다.  

Dynamics  
메뉴 조회 이후  

Goals  
사용자가 원하는 음료를 선택하도록 한다.  

---

### 3) View Menu Detail

Purpose  
선택한 음료의 상세 정보를 제공하기 위함  

Approach  
선택된 메뉴에 대한 가격, 옵션 등을 화면에 표시한다.  

Dynamics  
메뉴 선택 시  

Goals  
사용자가 충분한 정보를 바탕으로 선택하도록 한다.  

---

### 4) Customize Menu

Purpose  
사용자가 음료 옵션을 설정하기 위함  

Approach  
사이즈, 당도, 얼음 양 등의 옵션을 선택할 수 있도록 UI를 제공한다.  

Dynamics  
메뉴 상세 확인 이후  

Goals  
사용자 맞춤형 주문이 가능하도록 한다.  

---

### 5) Check Quantity

Purpose  
주문할 수량을 설정하기 위함  

Approach  
수량 증가/감소 버튼을 통해 원하는 수량을 입력받는다.  

Dynamics  
옵션 선택 이후  

Goals  
정확한 주문 수량 설정  

---

### 6) Add to Order

Purpose  
선택한 메뉴를 주문 목록에 추가하기 위함  

Approach  
사용자가 선택한 메뉴와 옵션을 장바구니에 저장한다.  

Dynamics  
수량 선택 이후  

Goals  
주문 목록 구성  

---

### 7) Confirm Order

Purpose  
최종 주문 내용을 확인하기 위함  

Approach  
현재까지 선택된 메뉴 목록과 총 금액을 화면에 표시한다.  

Dynamics  
결제 이전 단계  

Goals  
주문 오류 방지  

---

### 8) Make Payment

Purpose  
주문에 대한 결제를 수행하기 위함  

Approach  
카드 또는 QR 결제 방식을 통해 결제를 요청한다.  

Dynamics  
주문 확인 이후  

Goals  
결제 완료  

---

### 9) Confirm Payment

Purpose  
결제 성공 여부를 확인하기 위함  

Approach  
Payment System과 통신하여 결제 결과를 받아 사용자에게 표시한다.  

Dynamics  
결제 요청 이후  

Goals  
정확한 결제 상태 제공  

---

### 10) View Receipt

Purpose  
결제 결과 및 주문 내역을 확인하기 위함  

Approach  
결제 완료 후 영수증 정보를 화면에 표시한다.  

Dynamics  
결제 완료 이후  

Goals  
사용자에게 주문 정보 제공  

---

### 11) Print Receipt

Purpose  
영수증을 출력하기 위함  

Approach  
프린터와 연동하여 영수증을 출력한다.  

Dynamics  
영수증 확인 이후  

Goals  
실물 영수증 제공  

---

### 12) Cancel Payment

Purpose  
결제를 취소하기 위함  

Approach  
사용자가 결제 취소 요청 시 Payment System에 취소 요청을 전송한다.  

Dynamics  
결제 진행 중 또는 완료 이후  

Goals  
결제 취소 처리  

---

### 13) Confirm Cancel Payment

Purpose  
결제 취소 결과를 확인하기 위함  

Approach  
결제 시스템으로부터 취소 결과를 받아 사용자에게 표시한다.  

Dynamics  
취소 요청 이후  

Goals  
정확한 취소 상태 제공  

---

### 14) Manage Menu

Purpose  
관리자가 메뉴를 관리하기 위함  

Approach  
관리자가 메뉴 추가, 수정, 삭제를 수행하고 서버에 반영한다.  

Dynamics  
관리자 접근 시  

Goals  
메뉴 최신 상태 유지  

---

### 15) View Order History

Purpose  
주문 내역을 확인하기 위함  

Approach  
서버에 저장된 주문 데이터를 조회하여 관리자에게 표시한다.  

Dynamics  
관리자 요청 시  

Goals  
주문 데이터 관리  

---

# 5. Problem statement

## 5. Problem statement

### Overview

본 시스템은 음료 주문을 자동화하는 키오스크 시스템으로, 사용자 편의성과 매장 운영 효율성을 동시에 향상시키는 것을 목표로 한다. 그러나 시스템 설계 및 구현 과정에서 다양한 문제를 고려해야 한다.

---

### 1) Problem #1: 사용자 인터페이스 복잡성

현재 키오스크 시스템은 다양한 기능을 제공하지만, 사용자 인터페이스가 복잡하여 고령층 또는 디지털 기기에 익숙하지 않은 사용자가 이용하기 어렵다.

이 문제를 해결하기 위해 직관적인 UI 설계와 간단한 메뉴 구조가 필요하다.

---

### 2) Problem #2: 주문 오류 가능성

사용자가 메뉴 선택, 옵션 설정, 수량 입력 과정에서 실수를 할 경우 잘못된 주문이 발생할 수 있다.

이를 방지하기 위해 주문 확인 단계 및 오류 수정 기능이 필요하다.

---

### 3) Problem #3: 결제 시스템 안정성

결제 과정에서 오류가 발생할 경우 주문이 정상적으로 처리되지 않을 수 있으며, 이는 사용자 불만으로 이어질 수 있다.

따라서 외부 결제 시스템과의 안정적인 연동이 중요하다.

---

### 4) Problem #4: 시스템 성능 및 응답 속도

사용자가 많은 시간대에는 시스템 응답 속도가 느려질 수 있으며, 이는 사용자 경험을 저하시킬 수 있다.

이를 해결하기 위해 빠른 데이터 처리와 효율적인 시스템 구조가 필요하다.

---

### 5) Problem #5: 보안 문제

결제 정보 및 사용자 데이터가 포함되므로 보안 문제가 발생할 수 있다.

데이터 암호화 및 안전한 통신 방식이 필요하다.

---

### 6) Problem #6: 시스템 장애 및 유지보수

시스템 오류나 장애 발생 시 매장 운영에 직접적인 영향을 미칠 수 있다.

따라서 안정적인 시스템 운영과 빠른 복구 기능이 필요하다.

---

## Non-Functional Requirements (NFRs)

### 1) Performance (성능)

- 시스템은 사용자 입력에 대해 빠른 응답 속도를 제공해야 한다.
- 다수의 사용자가 동시에 이용하더라도 성능 저하가 최소화되어야 한다.

---

### 2) Usability (사용성)

- 모든 연령대의 사용자가 쉽게 사용할 수 있도록 직관적인 UI를 제공해야 한다.
- 최소한의 단계로 주문이 가능해야 한다.

---

### 3) Reliability (신뢰성)

- 시스템은 오류 없이 안정적으로 동작해야 한다.
- 장애 발생 시 빠르게 복구되어야 한다.

---

### 4) Security (보안)

- 결제 정보 및 사용자 데이터는 안전하게 보호되어야 한다.
- 외부 공격으로부터 시스템을 보호해야 한다.

---

### 5) Maintainability (유지보수성)

- 시스템은 쉽게 수정 및 확장이 가능해야 한다.
- 관리자 기능을 통해 효율적인 관리가 가능해야 한다.

---

### 6) Scalability (확장성)

- 사용자 수 증가에 따라 시스템 확장이 가능해야 한다.
- 다양한 매장 환경에 적용할 수 있어야 한다.

---

## 6. Glossary

| Term | Description |
|------|------------|
| Customer | 키오스크를 이용하여 음료를 주문하는 사용자 |
| Manager | 메뉴 및 주문 데이터를 관리하는 관리자 |
| Kiosk System | 사용자 인터페이스를 제공하고 주문을 처리하는 시스템 |
| Payment System | 카드 및 QR 결제를 처리하는 외부 시스템 |
| Server | 주문 및 메뉴 데이터를 저장하고 관리하는 시스템 |
| Menu | 사용자가 선택할 수 있는 음료 목록 |
| Order | 사용자가 선택한 음료 및 옵션의 집합 |
| Payment | 사용자가 주문에 대해 금액을 지불하는 과정 |
| Receipt | 결제 완료 후 제공되는 주문 내역 문서 |
| UI (User Interface) | 사용자가 시스템과 상호작용하는 화면 |
| UX (User Experience) | 사용자가 시스템을 사용하면서 느끼는 경험 |
| Database | 데이터를 저장하고 관리하는 구조 |

---

## 7. References

1) 키오스크 시스템 관련 자료  
- 키오스크 개념 및 활용 사례

