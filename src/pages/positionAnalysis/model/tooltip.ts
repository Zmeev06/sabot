export class TooltipHelper {
  static createCircle(color: string) {
    const circle = document.createElement('div');
    const circleInner = document.createElement('div');

    circle.setAttribute('canvas-circle-element', '');

    circle.style.cssText = `
			flex-shrink: 0;
			width: 12px;
			height: 12px;
			background-color: ${setAlphaRGBAColor(color, 0.2)};
			border-radius: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		`;

    circleInner.style.cssText = `
			width: 8px;
			height: 8px;
			border-radius: 100%;
			background-color: ${color};
		`;

    circle.appendChild(circleInner);
    return circle;
  }

  static createLabelText(text: string[]) {
    const markUp = document.createElement('div');
    markUp.setAttribute('canvas-text-element', '');
    markUp.style.cssText = `
			font-size: 12px;
			font-weight: 400;
			line-height: 18px;
			color: rgb(var(--text-primary));
		`;
    text.forEach((t) => {
      markUp.appendChild(document.createTextNode(t));
    });
    return markUp;
  }

  static createLine() {
    const markUp = document.createElement('div');
    markUp.setAttribute('canvas-line-element', '');
    markUp.style.cssText = `
			height: 94%;
			transform: translateY(-6%);
			width: 1px;
			background-color: rgb(var(--border-strong));
		`;
    return markUp;
  }

  static createWrapper() {
    const markUp = document.createElement('div');
    markUp.setAttribute('canvas-wrapper-element', '');
    markUp.style.cssText = `
			width: 100%;
			background-color: rgb(var(--foreground));
			border: 1px solid rgb(var(--border-mid));
			border-radius: var(--radius);
			padding: 12px;
			display: flex;
			flex-direction: column;
			gap: 7px;
		`;
    return markUp;
  }

  static createTitle(text: string) {
    const markUp = document.createElement('div');
    markUp.style.cssText = `
			color: rgb(var(--text-primary));
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
		`;
    markUp.innerHTML = text;
    return markUp;
  }

  static createLabel(color: string, text: string[]) {
    const markUp = document.createElement('div');

    markUp.style.cssText = `
			display: inline-flex;
			align-items: center;
			gap: 8px;
		`;

    const circle = TooltipHelper.createCircle(color);
    const labelText = TooltipHelper.createLabelText(text);
    markUp.appendChild(circle);
    markUp.appendChild(labelText);

    return markUp;
  }

  static getOrCreateTooltip(chart: any) {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');

    if (!tooltipEl) {
      tooltipEl = document.createElement('div');

      const tooltipLine = TooltipHelper.createLine();
      const tooltipContent = TooltipHelper.createWrapper();

      tooltipEl.style.cssText = `
				height: 100%;
				display: flex;
				align-items: center;
				gap: 8px;
			`;

      tooltipEl.style.borderRadius = 'var(--radius)';
      tooltipEl.style.opacity = '1';
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, 0)';
      tooltipEl.style.transition = 'all .1s ease';

      tooltipEl.appendChild(tooltipLine);
      tooltipEl.appendChild(tooltipContent);

      chart.canvas.parentNode.appendChild(tooltipEl);
    }

    return tooltipEl;
  }

  static externalTooltipHandler(context: any) {
    // Tooltip Element
    const { chart, tooltip } = context;
    const tooltipEl = TooltipHelper.getOrCreateTooltip(chart);

    const wrapper = tooltipEl.querySelector('[canvas-wrapper-element]');

    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }

    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map((b: any) => b.lines);

      wrapper.innerHTML = '';

      titleLines.forEach((title: any) => {
        const titleElement = TooltipHelper.createTitle(title);
        wrapper.appendChild(titleElement);
      });

      bodyLines.forEach((body: string[], i: number) => {
        const label = TooltipHelper.createLabel(
          tooltip.labelColors[i].backgroundColor,
          body
        );
        wrapper.appendChild(label);
      });
    }

    const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = '50%';
    tooltipEl.style.transform = `translateY(-50%)`;
    tooltipEl.style.font = tooltip.options.bodyFont.string;
  }
}

function setAlphaRGBAColor(color: string, alpha: number) {
  const parts = color.split(' ');
  return parts.slice(0, parts.length - 1).join('') + alpha + ')';
}
