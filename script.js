// Initialize elements
const controls = {
width: document.getElementById('width'),
height: document.getElementById('height'),
shadowOffsetX: document.getElementById('shadowOffsetX'),
shadowOffsetY: document.getElementById('shadowOffsetY'),
borderRadiusTL: document.getElementById('borderRadiusTL'),
borderRadiusTR: document.getElementById('borderRadiusTR'),
borderRadiusBR: document.getElementById('borderRadiusBR'),
borderRadiusBL: document.getElementById('borderRadiusBL'),
backgroundColor: document.getElementById('backgroundColor'),
shadowColor: document.getElementById('shadowColor'),
toggleShapeBorder: document.getElementById('toggleShapeBorder'),
toggleShadowBorder: document.getElementById('toggleShadowBorder'),
};

const shadow = document.querySelector('.organic-shadow');
const shape = document.querySelector('.organic-shape');

// Update shape styles dynamically
function updateShape() {
const width = `${controls.width.value}px`;
const height = `${controls.height.value}px`;
const shadowOffsetX = `${controls.shadowOffsetX.value}px`;
const shadowOffsetY = `${controls.shadowOffsetY.value}px`;
const borderRadius = `${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}% / ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}%`;
const backgroundColor = controls.backgroundColor.value;
const shadowColor = controls.shadowColor.value;

// Apply styles to the shadow
shadow.style.width = width;
shadow.style.height = height;
shadow.style.left = shadowOffsetX;
shadow.style.top = shadowOffsetY;
shadow.style.borderRadius = borderRadius;
shadow.style.backgroundColor = shadowColor;

// Apply styles to the shape
shape.style.width = width;
shape.style.height = height;
shape.style.borderRadius = borderRadius;
shape.style.backgroundColor = backgroundColor;

// Toggle borders
shape.style.border = controls.toggleShapeBorder.checked ? '2px solid black' : 'none';
shadow.style.border = controls.toggleShadowBorder.checked ? '2px solid black' : 'none';
}

// Add event listeners to all controls
Object.values(controls).forEach(control => {
control.addEventListener('input', updateShape);
});

// Initial update
updateShape();

// Copy CSS
document.getElementById('copyCSS').addEventListener('click', () => {
const css = `
.shadow-wrapper {
position: relative;
}

.organic-shadow {
position: absolute;
width: ${controls.width.value}px;
height: ${controls.height.value}px;
left: ${controls.shadowOffsetX.value}px;
top: ${controls.shadowOffsetY.value}px;
border-radius: ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}% / ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}%;
background: ${controls.shadowColor.value};
border: ${controls.toggleShadowBorder.checked ? '2px solid black' : 'none'};
}

.organic-shape {
position: absolute;
width: ${controls.width.value}px;
height: ${controls.height.value}px;
border-radius: ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}% / ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}%;
background: ${controls.backgroundColor.value};
border: ${controls.toggleShapeBorder.checked ? '2px solid black' : 'none'};
}
`;
navigator.clipboard.writeText(css).then(() => alert('CSS copied to clipboard!'));
});

// Copy HTML
document.getElementById('copyHTML').addEventListener('click', () => {
const html = `
<div class="shadow-wrapper">
<div class="organic-shadow"></div>
<div class="organic-shape"></div>
</div>`;
navigator.clipboard.writeText(html).then(() => alert('HTML copied to clipboard!'));
});

// Function to export CSS with multiplier
function exportWithMultiplier() {
    const multiplier = parseFloat(document.getElementById('exportMultiplier').value);
    const width = `${controls.width.value * multiplier}px`;
    const height = `${controls.height.value * multiplier}px`;
    const shadowOffsetX = `${controls.shadowOffsetX.value * multiplier}px`;
    const shadowOffsetY = `${controls.shadowOffsetY.value * multiplier}px`;

    const css = `
    .shadow-wrapper {
        position: relative;
    }

    .organic-shadow {
        position: absolute;
        width: ${width};
        height: ${height};
        left: ${shadowOffsetX};
        top: ${shadowOffsetY};
        border-radius: ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}% / ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}%;
        background: ${controls.shadowColor.value};
        border: ${controls.toggleShadowBorder.checked ? '2px solid black' : 'none'};
    }

    .organic-shape {
        position: absolute;
        width: ${width};
        height: ${height};
        border-radius: ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}% / ${controls.borderRadiusTL.value}% ${controls.borderRadiusTR.value}% ${controls.borderRadiusBR.value}% ${controls.borderRadiusBL.value}%;
        background: ${controls.backgroundColor.value};
        border: ${controls.toggleShapeBorder.checked ? '2px solid black' : 'none'};
    }
    `;
    
    navigator.clipboard.writeText(css).then(() => {
        alert('CSS with multiplier copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Add event listener for export button
document.getElementById('export').addEventListener('click', exportWithMultiplier);