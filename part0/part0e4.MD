```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of selain: Selain lähettää uuden muistiinpanon POSTin mukana
    palvelin->>selain: 302 REDIRECT exampleapp/notes

    Note right of selain: Palvelin tekee muistiinpanolle omat juttunsa ja uudelleen ohjaa selaimen lataamaan aloitussivun uudestaan
```

    

