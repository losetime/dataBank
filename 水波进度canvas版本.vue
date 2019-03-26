<template>
    <div class="water-wrap">
        <div class="b-r-b-item">
            <div class="canvas-wrap">
                <canvas ref="canvasZero"></canvas>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props:{
    bgColor:{
        type:String
    },
    bgColorlimpid:{
        type:String
    },
    rangeValue:{    // 水位数值
        type:Number
    }
  },
  data() {
    return {
      canvas0: null,
      xOffset: 0, // 初始偏移
      speed: 0.1, // 偏移速度
      nowRange: 0 // 初始水位
    };
  },
  methods: {
    canvasAnimat0(val) {
      this.canvas0 = val;
      this.canvas0.height = 164;
      this.canvas0.width = 55;
      const ctx = this.canvas0.getContext("2d");
      this.drawSin(ctx);
      requestAnimationFrame(this.draw0.bind(this, this.canvas0));
    },
    draw0(val) {
      const canvas = this.canvas0;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 曲线绘制
      this.drawSin(
        ctx,
        0.1,
        3,
        this.xOffset,
        this.nowRange,
        this.bgColor
      );
      this.drawSin(
        ctx,
        0.05,
        5,
        this.xOffset,
        this.nowRange,
        this.bgColorlimpid
      );
      this.xOffset += this.speed;

      if (this.nowRange < this.rangeValue) {
        this.nowRange += 0.01;
      }
      requestAnimationFrame(this.draw0.bind(this));
    },
    drawSin(ctx, wavWidth, wavHeight, xOffset, nowRange, fillColor) {
      const points = [];
      const canvasWidth = this.canvas0.width;
      const canvasHeight = this.canvas0.height;
      const startX = 0;
      const waveWidth = wavWidth; // 波浪宽度,数越小越宽
      const waveHeight = wavHeight; // 波浪高度,数越大越高
      ctx.beginPath();

      for (let x = startX; x < startX + canvasWidth; x += 20 / canvasWidth) {
        const y = waveHeight * Math.sin((startX + x) * waveWidth + xOffset);
        points.push([x, (1 - nowRange) * canvasHeight + y]);
        ctx.lineTo(x, (1 - nowRange) * canvasHeight + y);
      }
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.lineTo(startX, canvasHeight);
      ctx.lineTo(points[0][0], points[0][1]);
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.save();
    }
  },
  mounted(){
      this.canvasAnimat0(this.$refs.canvasZero);
  }
};
</script>
<style lang="scss" scoped>
.water-wrap {
  width: 24%;
  .b-r-b-item {
    .canvas-wrap {
      width: 55px;
      height: 164px;
      transform: rotate(90deg);
      background-color: rgba(0,0,0,0.2);
    }
  }
}
</style>

