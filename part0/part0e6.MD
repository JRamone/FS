```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of selain: uusi muistiinpano taas POSTin mukana
    palvelin->>selain: 201 CREATED application/json
  
```