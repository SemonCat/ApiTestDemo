Feature: ping end-point

  Background:
    * url `${host}`

  Scenario: get product info
    Given path 'ping'
    When method GET
    Then status 200
