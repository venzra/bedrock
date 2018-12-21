```code
<fa-icon icon="spinner" [spin]="true" size="2x"></fa-icon>
<fa-icon [icon]="['fab', 'angular']" rotate="180" size="2x"></fa-icon>

<fa-layers size="2x">
    <fa-icon icon="square"></fa-icon>
    <fa-icon [icon]="['fab', 'angular']" [inverse]="true" transform="shrink-4"></fa-icon>
</fa-layers>

<fa-layers [fixedWidth]="true" size="2x">
    <fa-icon icon="envelope"></fa-icon>
    <fa-layers-counter content="99+"></fa-layers-counter>
</fa-layers>
```
