import { ChartType } from '../../../components/metricGroup/constants/types';
import { TooltipHelper } from '../model/tooltip';
import { getColorFromCssVariableToRGBA } from '@//components/metricGroup';

import Chart from 'chart.js/auto';

const doughnutLabelPlugin = {
  id: 'doughnutLabel',
  beforeDraw: function (chart: any) {
    if (chart.config.type === 'doughnut') {
      const width = chart.canvas.width,
        height = chart.canvas.height,
        ctx = chart.ctx;

      ctx.restore();
      const fontSize = 32;
      ctx.font = `${fontSize}px sans-serif`;
      ctx.textBaseline = 'middle';

      const total = Math.min(...chart.data.datasets[0].data);
      const text = `${total.toString()}%`;

      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillStyle = '#17B26A';
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }
};

Chart.register(doughnutLabelPlugin);

interface IDataset {
  type?: 'bar';
  label: string;
  data: number[];
  borderColor?: string;
  tension?: number;
  fill?: boolean;
  backgroundColor: string | string[] | CanvasGradient;
  pointBackgroundColor?: string;
  clip?: {
    left: number | boolean;
    right: number | boolean;
    top: number | boolean;
    bottom: number | boolean;
  };
  pointRadius?: typeof pointRadiusFunc | number;
  order?: number;
  borderRadius?: number;
}

interface IChartDataConfig {
  labels: string[];
  datasets: IDataset[];
}

function pointRadiusFunc(context: any) {
  if (context.dataIndex === 0 || context.dataIndex === 13) {
    return 0;
  } else {
    return 4;
  }
}

function getChartDatasetDefault() {
  return {
    tension: 0.4,
    fill: true,
    clip: { left: 0, right: 0, top: false, bottom: false },
    pointRadius: (context: any) => pointRadiusFunc(context)
  };
}

const chartLine: IChartDataConfig = {
  labels: [
    '',
    '06.01.22',
    '06.02.22',
    '06.03.22',
    '06.04.22',
    '06.05.22',
    '06.06.22',
    '06.07.22',
    '06.08.22',
    '06.09.22',
    '06.10.22',
    '06.11.22',
    '06.12.22',
    ''
  ],
  datasets: [
    {
      label: 'My Dataset',
      data: [24, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26],
      borderColor: getColorFromCssVariableToRGBA('--cyan-300'),
      backgroundColor: 'transparent',
      pointBackgroundColor: getColorFromCssVariableToRGBA('--cyan-400'),
      ...getChartDatasetDefault()
    },
    {
      label: 'My Dataset',
      data: [12, 14, 13, 15, 18, 19, 18, 17, 19, 25, 19, 18, 16, 18],
      borderColor: getColorFromCssVariableToRGBA('--purple-400'),
      backgroundColor: 'transparent',
      pointBackgroundColor: getColorFromCssVariableToRGBA('--purple-400'),
      ...getChartDatasetDefault()
    },
    {
      label: 'My Dataset',
      data: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19],
      borderColor: getColorFromCssVariableToRGBA('--success-400'),
      backgroundColor: 'transparent',
      pointBackgroundColor: getColorFromCssVariableToRGBA('--success-400'),
      ...getChartDatasetDefault()
    }
  ]
};

const chartLineFilled: IChartDataConfig = {
  labels: [
    '',
    '06.01.22',
    '06.02.22',
    '06.03.22',
    '06.04.22',
    '06.05.22',
    '06.06.22',
    '06.07.22',
    '06.08.22',
    '06.09.22',
    '06.10.22',
    '06.11.22',
    '06.12.22',
    ''
  ],
  datasets: [
    {
      label: 'First Dataset',
      data: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19],
      borderColor: getColorFromCssVariableToRGBA('--cyan-300'),
      backgroundColor: getColorFromCssVariableToRGBA('--cyan-300'),
      pointBackgroundColor: getColorFromCssVariableToRGBA('--cyan-300'),
      tension: 0.4,
      fill: true,
      pointRadius: 0
    },
    {
      label: 'First Dataset',
      data: [12, 14, 13, 15, 18, 19, 18, 17, 19, 25, 19, 18, 16, 28],
      borderColor: getColorFromCssVariableToRGBA('--purple-400'),
      backgroundColor: getColorFromCssVariableToRGBA('--purple-400'),
      pointBackgroundColor: getColorFromCssVariableToRGBA('--purple-400'),
      tension: 0.4,
      fill: true,
      pointRadius: 0
    },
    {
      label: 'First Dataset',
      data: [24, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26],
      borderColor: getColorFromCssVariableToRGBA('--success-400'),
      backgroundColor: getColorFromCssVariableToRGBA('--success-400'),
      pointBackgroundColor: getColorFromCssVariableToRGBA('--success-400'),
      tension: 0.4,
      fill: true,
      pointRadius: 0
    }
  ]
};

const chartBar: IChartDataConfig = {
  labels: [
    '06.01.22',
    '06.02.22',
    '06.03.22',
    '06.04.22',
    '06.05.22',
    '06.06.22',
    '06.07.22',
    '06.08.22',
    '06.09.22',
    '06.10.22',
    '06.11.22',
    '06.12.22'
  ],
  datasets: [
    {
      label: 'First bar',
      type: 'bar',
      backgroundColor: getColorFromCssVariableToRGBA('--cyan-300'),
      data: [50, 25, 12, 48, 90, 76, 42, 32, 54, 213, 54, 123],
      borderRadius: 8
    },
    {
      label: 'Second bar',
      type: 'bar',
      backgroundColor: getColorFromCssVariableToRGBA('--purple-400'),
      data: [21, 84, 24, 75, 37, 65, 34, 32, 54, 213, 54, 123],
      borderRadius: 8
    },
    {
      label: 'Third bar',
      type: 'bar',
      backgroundColor: getColorFromCssVariableToRGBA('--success-400'),
      data: [41, 52, 24, 74, 23, 21, 32, 32, 54, 213, 54, 123],
      borderRadius: 8
    }
  ]
};

const chartDoughnut: IChartDataConfig = {
  labels: ['06.01.22', '06.02.22', '06.03.22'],
  datasets: [
    {
      label: 'First Dataset',
      data: [35, 25, 25, 15],
      backgroundColor: [
        getColorFromCssVariableToRGBA('--cyan-300'),
        getColorFromCssVariableToRGBA('--purple-400'),
        getColorFromCssVariableToRGBA('--success-400')
      ],
      fill: true,
      tension: 0.4
    }
  ]
};

const axeX = {
  ticks: {
    autoSkip: true,
    maxRotation: 0,
    color: '#475467',
    font: {
      size: 12
    }
  },
  grid: {
    display: false
  }
};

const axeY = {
  ticks: {
    color: '#344054',
    font: {
      size: 12
    },
    stepSize: 8
  },
  grid: {
    backgroundColor: '#F2F4F7',
    borderWidth: 1
  },
  border: {
    display: false
  },
  beginAtZero: true,
  suggestedMin: 0,
  suggestedMax: 40
};

function getChartOptions(options?: {
  axeX?: boolean;
  axeY?: boolean;
  bar?: boolean;
}) {
  return {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: TooltipHelper.externalTooltipHandler
      }
    },
    scales: {
      x: {
        stacked: options?.bar ?? false,
        display: options?.axeX ?? true,
        ...axeX
      },
      y: {
        stacked: options?.bar ?? false,
        display: options?.axeY ?? true,
        ...axeY
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
}

export function getChartOptionsConfig(type: ChartType) {
  switch (type) {
    case 'line':
    case 'line-filled':
      return getChartOptions({
        axeX: true,
        axeY: true
      });
    case 'bar':
      return getChartOptions({
        axeX: true,
        axeY: false,
        bar: true
      });
    case 'doughnut':
      return getChartOptions({
        axeX: false,
        axeY: false,
        bar: false
      });
  }
}

export function getChartDataConfig(data: IChartDataConfig) {
  return {
    labels: data.labels,
    datasets: data.datasets.map((item) => ({
      label: item.label,
      data: item.data,
      borderColor: item.borderColor,
      tensition: item.tension,
      fill: item.fill,
      backgroundColor: item.backgroundColor,
      pointBackgroundColor: item.pointBackgroundColor,
      clip: item.clip,
      pointRadius: item.pointRadius,
      borderRadius: item.borderRadius
    }))
  };
}

export function generateChartDataConfig(type: ChartType) {
  return getChartDataConfig(getChartDatasetsDefault(type));
}

function getChartDatasetsDefault(type: ChartType): IChartDataConfig {
  switch (type) {
    case 'line':
      return chartLine;
    case 'line-filled':
      return chartLineFilled;
    case 'bar':
      return chartBar;
    case 'doughnut':
      return chartDoughnut;
  }

  return chartLine;
}
