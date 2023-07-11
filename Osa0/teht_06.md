## Tehtävä 0.6


```mermaid
sequenceDiagram
    participant selain
    participant palvelin
    
    selain->>palvelin: POST https://studies.cs.helsinki.fi/exampleapp/spa
    activate palvelin
    palvelin-->>selain: Muistiinpano luotu
    deactivate palvelin
    
    Note right of selain: Vastauksena saadaan viesti "note created"
```