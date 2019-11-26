# About Error Codes
This is a list of error code you can encounter using Public Delegation. These error code are shared between iOS and Android plateform.

Codes are constructed in two parts:
 - First one is the original error code from the protocol (CEA, TLS, GATT,  BLE, ADSD).
 - Second one is the error code added for Public Delegation specific development.


## CEA errors

#### What is CEA?
[CEA](http://www.careasyapps.com/ ) is the communication protocol between smartdevice and vehicle from Groupe PSA. It run over Bluetooth Low Energy (**BLE**).


|Error code|Name|Description|
|-|-|-|
|200|**OK**| No error.|
|307&nbsp;000|**Temporary&nbsp;Redirect**| URI received is different from expected URI. Request should be repeated with another URI. |
|400&nbsp;000|**Bad&nbsp;Request**| There is an error in the format of the message passed to the endpoint. |
|401&nbsp;000|**Unauth**| Cipher error, difference between SD and SDCM version.|
|402&nbsp;000|**Integrity**| Invalid signature: Wrong token or wrong transmission. Retry and refresh the token. If it is still not working you can try strong authentication. |
|403&nbsp;000|**Forbidden**| Invalid acces rights. |
|404&nbsp;000|**Not&nbsp;Found**| Device has not been discovered.|
|406&nbsp;000|**Expired**| Token expired, token refreshment error.|
|407&nbsp;000|| All other token errors different from "406 000 Invalid Token". |
|408&nbsp;000|**Request&nbsp;Time-out**| Timed out waiting for a HMI request|
|409&nbsp;000|**Conflict**| To be managed if subscription is managed by the SDCM: The subscription has already been made|
|410&nbsp;000|| Dismissed user. |
|417&nbsp;000|**Expectation&nbsp;failed**| To be managed if subscription is managed by the SDCM: Tried to unsubscribe from an unexistent subscription.|
|422&nbsp;000|**Unprocessable&nbsp;Entity**| A non-existent signal has been requested. |
|429&nbsp;000|**Too&nbsp;Many&nbsp;Requests**| Too many signal values have been requested at the same time|
|430&nbsp;000|**Too&nbsp;Many&nbsp;UI&nbsp;Requests**| Too many UI alert requested at the same time|
|501&nbsp;000|**Not&nbsp;Implemented**| Internal problem related to the SDCM: Lack of ability to fulfil a signal request. This function is not avaible on the vehicle, vehicle type is wrong. |
|503&nbsp;000|**Service&nbsp;unavailable**| SDCM Internal problem: Service is Not available. |
|504&nbsp;000|**Out&nbsp;of&nbsp;Channel**| Too many sessions are opened on the SDCM.|
|505&nbsp;000|**Connection&nbsp;lost**||
|510&nbsp;000|**Certificates&nbsp;expired**||
|511&nbsp;000|**Problems&nbsp;accesing&nbsp;log**| An internal BTEL access the log or an the answer to large to be sent.|
|512&nbsp;000|**Certificates&nbsp;expired**| Only  own certificate is expired. |
|513&nbsp;000|**Certificates&nbsp;expired**| Only IC certificate is expired. |
|514&nbsp;000|**CRL&nbsp;expired**| Only the IC CRL certificate is expired. |
|515&nbsp;000|**CRL&nbsp;expired**| Only the Root CRL certificate is expired. |
|520&nbsp;000|**Certificate&nbsp;missing**| At least 2 certificates and/or CRL are missing.|
|521&nbsp;000|**Certificate&nbsp;missing**| Only its own certificate is missing. |
|522&nbsp;000|**Certificate&nbsp;missing**| Only the certificate is missing. |
|523&nbsp;000|**Certificate&nbsp;missing**| Only the IC CRL certificate is missing. |
|524&nbsp;000|**Certificate&nbsp;missing**| Only the Root CRL is missing. |
|525&nbsp;000|**Certificate&nbsp;missing**| Only the EC certificate is missing. |


## TLS errors

|Error code|Name|Description|
|-|-|-|
|503&nbsp;001|**errSSLProtocol**| SSL protocol error. |
|503&nbsp;002|**errSSLNegotiation**| Cipher Suite negotiation failure. |
|503&nbsp;003|**errSSLFatalAlert**| Fatal alert. |
|412&nbsp;001|**errSSLSessionNotFound**| Attempt to restore an unknown session. |
|499&nbsp;001|**errSSLClosedGraceful**| Connection closedF gracefully.  |
|499&nbsp;002|**errSSLClosedAbort**| Connection closed via error. |
|412&nbsp;002|**errSSLXCertChainInvalid**| Invalid certificate chain. |
|412&nbsp;003|**errSSLBadCert**| Bad certificate format. |
|412&nbsp;004|**errSSLCrypto**| Underlying cryptographic error. |
|500&nbsp;001|**errSSLInternal**| Internal error. |
|500&nbsp;002|**errSSLModuleAttach**| Module attach failure. |
|526&nbsp;001|**errSSLUnknownRootCert**| Valid cert chain, untrusted root. |
|526&nbsp;002|**errSSLNoRootCert**| Cert chain not verified by root. |
|526&nbsp;003|**errSSLCertExpired**| Chain had an expired cert. |
|526&nbsp;004|**errSSLCertNotYetValid**| Chain had a cert not yet valid.|
|499&nbsp;003|**errSSLClosedNoNotify**| Server closed session with no notification.|
|500&nbsp;003|**errSSLBufferOverflow**| Insufficient buffer provided. |
|412&nbsp;005|**errSSLBadCipherSuite**| Bad SSLCipherSuite either in device or vehicle. |
|XXX&nbsp;XXX|Fatal errors detected by peer. |
|400&nbsp;001|**errSSLPeerUnexpectedMsg**| Unexpected message received. Usually from an old session. |
|400&nbsp;002|**errSSLPeerBadRecordMac**| Bad MAC (iOS). Usually from an old session.|
|400&nbsp;003|**errSSLPeerDecryptionFail**| Decryption failedUsually from an old session. |
|400&nbsp;004|**errSSLPeerRecordOverflow**| Record overflowUsually from an old session. |
|400&nbsp;005|**errSSLPeerDecompressFail**| Decompression failure. Usually from an old session. |
|527&nbsp;001|**errSSLPeerHandshakeFail**| Handshake failure. Usually from an old session. |
|526&nbsp;006 modifie|**errSSLPeerBadCert**| Misc bad certificate. Usually from an old session. |
|526&nbsp;007 modifie|**errSSLPeerUnsupportedCert**| Bad unsupported cert format. Usually from an old session. |
|510&nbsp;001|**errSSLPeerCertRevoked**| Certificate revoked. |
|510&nbsp;002|**errSSLPeerCertExpired**| Certificate expired. |
|526&nbsp;005|**errSSLPeerCertUnknown**| Unknown certificate. |
|500&nbsp;004|**errSSLIllegalParam**| Illegal parameter.|
|524&nbsp;001|**errSSLPeerUnknownCA**| Unknown Cert Authority. Usually from an old session. |
|403&nbsp;001|**errSSLPeerAccessDenied**| Access denied. Usually from an old session. |
|400&nbsp;006|**errSSLPeerDecodeError**| Decoding error. Usually from an old session. |
|400&nbsp;007|**errSSLPeerDecryptError**| Decryption error. Usually from an old session. |
|527&nbsp;001|**errSSLPeerExportRestriction**| Export restriction. Usually from an old session. |
|527&nbsp;002|**errSSLPeerProtocolVersion**| Bad protocol version. Usually from an old session. |
|527&nbsp;003|**errSSLPeerInsufficientSecurity**| Insufficient security. Usually from an old session. |
|500&nbsp;005|**errSSLPeerInternalError**| Internal error. Usually from an old session. |
|499&nbsp;004|**errSSLPeerUserCancelled**| User canceled. Usually from an old session. |
|412&nbsp;006|**errSSLPeerNoRenegotiation**| No renegotiation allowed. Usually from an old session. |
|XXX&nbsp;XXX| More errors detected.	|
|526&nbsp;007|**errSSLHostNameMismatch**| Peer host name mismatch. |
|505&nbsp;001|**errSSLConnectionRefused**| Peer dropped connection before responding. |
|400&nbsp;008|**errSSLDecryptionFail**| Decryption failure. |
|400&nbsp;009|**errSSLBadRecordMac**| Mac is wrong |
|400&nbsp;010|**errSSLRecordOverflow**| Record overflow. |
|412&nbsp;007|**errSSLBadConfiguration**| Configuration error. |
|XXX&nbsp;XXX|**errSSLUnexpectedRecord**|  |
|XXX&nbsp;XXX|**errSSLWeakPeerEphemeralDHKey**| |

## GATT errors

|Error code|Name|Description|
|-|-|-|
|200&nbsp;001|**CBATTErrorSuccess**| The ATT command or request successfully completed.|
|400&nbsp;011|**CBATTErrorInvalidHandle**| The attribute handle is invalid on this peripheral. |
|400&nbsp;012|**CBATTErrorReadNotPermitted**| The attribute’s value cannot be read. |
|400&nbsp;013|**CBATTErrorWriteNotPermitted**| The attribute’s value cannot be written.|
|400&nbsp;014|**CBATTErrorInvalidPdu**| The attribute Protocol Data Unit (PDU) or “message” is invalid. |
|403&nbsp;002|**CBATTErrorInsufficientAuthentication**| The attribute requires authentication before its value can be read or written.|
|501&nbsp;001|**CBATTErrorRequestNotSupported**| The attribute server does not support the request received by the client. |
|501&nbsp;002|**CBATTErrorInvalidOffset**| The specified offset value was past the end of the attribute’s value. |
|403&nbsp;003|**CBATTErrorInsufficientAuthorization**| The attribute requires authorization before its value can be read or written.|
|429&nbsp;001|**CBATTErrorPrepareQueueFull**| The prepare queue is full, because too many prepare write requests have been queued.|
|422&nbsp;001|**CBATTErrorAttributeNotFound**| The attribute is not found within the specified attribute handle range.|
|501&nbsp;003|**CBATTErrorAttributeNotLong**| The attribute cannot be read or written using the ATT read blob request. |
|501&nbsp;004|**CBATTErrorInsufficientEncryptionKeySize**| The encryption key size used for encrypting this link is insufficient. |
|501&nbsp;005|**CBATTErrorInvalidAttributeValueLength**| The length of the attribute’s value is invalid for the intended operation. |
|412&nbsp;008|**CBATTErrorUnlikelyError**| The ATT request has encountered an unlikely error and therefore could not be completed. |
|412&nbsp;009|**CBATTErrorInsufficientEncryption**| The attribute requires encryption before its value can be read or written. |
|XXX&nbsp;XXX|**CBATTErrorUnsupportedGroupType**| The attribute type is not a supported grouping attribute as defined by a higher-layer specification. |
|501&nbsp;006|**CBATTErrorInsufficientResources**| Resources are insufficient to complete the ATT request.|

## BLE errors

|Error code|Name|Description|
|-|-|-|
|500&nbsp;006|**CBErrorUnknown**| An unknown error occurred.|
|400&nbsp;015|**CBErrorInvalidParameters**| The specified parameters are invalid.|
|400&nbsp;016|**CBErrorInvalidHandle**| The specified attribute handle is invalid. |
|503&nbsp;004|**CBErrorNotConnected**| The device is not currently connected.|
|501&nbsp;007|**CBErrorOutOfSpace**| The device BLE chipset has run out of space to complete the intended operation.|
|500&nbsp;007|**CBErrorOperationCancelled**| The operation is canceled.|
|499&nbsp;005|**CBErrorConnectionTimeout**| The connection timed out.|
|499&nbsp;006|**CBErrorPeripheralDisconnected**| The peripheral disconnected.|
|403&nbsp;004|**CBErrorUUIDNotAllowed**| The specified UUID is not permitted.|
|409&nbsp;001|**CBErrorAlreadyAdvertising**| The peripheral is already advertising. |
|444&nbsp;001|**CBErrorConnectionFailed**| The connection failed. |
|504&nbsp;001|**CBErrorConnectionLimitReached**| The device already has the maximum number of connections.|
|504&nbsp;002|**CBErrorMaxConnection**| The device already has the maximum number of connections.|
|503&nbsp;005| ||
|412&nbsp;010| ||
|503&nbsp;006| ||

## ADSD Communication errors

|Error code|Name|Description|
|-|-|-|
|444&nbsp;002|**PREPAR&nbsp;BLE&nbsp;ERROR**| BLE is not enabled on the device. |
|444&nbsp;003|**SCAN&nbsp;ERROR**| BLE is not enabled on the device.|
|404&nbsp;001|**CONNECT&nbsp;ERROR**| There is no vehicle avaible in the area.|
|499&nbsp;007|**DISCONNECT&nbsp;ERROR**| Not connected to any vehicle. |
|444&nbsp;004|**SEND&nbsp;DATA&nbsp;ERROR**| Not connected to any vehicle. |
|404&nbsp;002|**GET&nbsp;DATA&nbsp;ERROR**| |
|400&nbsp;017|**SEGMENTATION&nbsp;ERROR**| Data are corrupted. |