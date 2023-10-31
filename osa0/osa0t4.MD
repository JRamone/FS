```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of selain: Selain lähettää uuden muistiinpanon POSTin mukana
    activate palvelin
    palvelin->>>selain: 302 REDIRECT exampleapp/notes
    deactivate palvelin

    Note right of selain: Palvelin tekee muistiinpanolle omat juttunsa ja uudelleen ohjaa selaimen lataamaan aloitussivun uudestaan
```

    

