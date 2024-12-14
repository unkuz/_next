"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useKey } from "react-use";

export const Miracle = () => {
  const [isReady, setIsReady] = useState(false);

  const audioEl = useRef<HTMLMediaElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyser = useRef<AnalyserNode>(null);
  const audioSource = useRef<MediaElementAudioSourceNode>(null);
  const ctxCanvas = useRef<CanvasRenderingContext2D>(null);

  useKey("", () => togglePlay());

  const genAudio = new Audio(
    "/Di Young - Pixel Pig (Ahmad Irfan Remix) [i3RgYbEOABk].mp3"
  );

  const [state, setState] = useState({
    track: genAudio,
    title: "",
    thumbnail:
      "https://64.media.tumblr.com/bc63289eea46b6a7d03e08ab3d4cb494/tumblr_mhjyzsQfYU1rfjowdo1_500.gif",
    isPlay: false,
  });

  useEffect(() => {
    const handler = async () => {
      ctxCanvas.current = canvasRef.current!.getContext("2d");

      audioEl.current!.onended = function () {
        state.isPlay = false;
      };
      setIsReady(true);

      setState((prev) => ({
        ...prev,
        title: "Di Young - Pixel Pig (Ahmad Irfan Remix)",
        thumbnail:
          "https://64.media.tumblr.com/bc63289eea46b6a7d03e08ab3d4cb494/tumblr_mhjyzsQfYU1rfjowdo1_500.gif",
      }));

      state.track!.src =
        "/Di Young - Pixel Pig (Ahmad Irfan Remix) [i3RgYbEOABk].mp3";
    };

    handler();
  }, [state]);

  const togglePlay = () => {
    if (!audioEl.current?.paused) {
      audioEl.current?.pause();
      setState((prev) => ({ ...prev, isPlay: false }));
      return;
    }
    audioEl.current?.play();
    setState((prev) => ({ ...prev, isPlay: true }));

    const audioContext = new AudioContext();

    if (!audioSource.current) {
      audioSource.current = audioContext.createMediaElementSource(
        audioEl.current!
      );

      analyser.current = audioContext.createAnalyser();

      audioSource.current.connect(analyser.current);

      analyser.current.connect(audioContext.destination);
    }

    analyser.current!.fftSize = 32_768;
    const bufferLength = analyser.current!.frequencyBinCount;

    const dataArray = new Uint8Array(bufferLength);

    function animate() {
      ctxCanvas.current!.clearRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );
      analyser.current!.getByteTimeDomainData(dataArray);

      ctxCanvas.current!.fillStyle = "transparent";
      ctxCanvas.current!.fillRect(
        0,
        0,
        canvasRef.current!.width,
        canvasRef.current!.height
      );

      ctxCanvas.current!.lineWidth = 5;
      ctxCanvas.current!.strokeStyle = "rgb(0 0 0)";
      ctxCanvas.current!.beginPath();

      const sliceWidth = canvasRef.current!.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * (canvasRef.current!.height / 2);

        if (i === 0) {
          ctxCanvas.current!.moveTo(x, y);
        } else {
          ctxCanvas.current!.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctxCanvas.current!.lineTo(
        canvasRef.current!.width,
        canvasRef.current!.height / 2
      );
      ctxCanvas.current!.stroke();
      requestAnimationFrame(animate);
    }

    animate();
  };
  return (
    <div
      className={clsx(
        "flex h-[60px] w-[calc(100vw-40px)] items-center rounded-[10px] !bg-[#34d0ff] p-[5px] [box-shadow:3px_3px_10px_#0000007f] sm:h-[50px] sm:w-[400px]",
        {
          "w-[60px] justify-center sm:w-[50px]": !isReady,
        }
      )}
    >
      <div
        className={clsx("flex h-full w-full items-center gap-[10px]", {
          "hidden ": !isReady,
        })}
      >
        <div className="aspect-square h-full overflow-hidden rounded-[7px]">
          {/* <img
            src={
              "https://64.media.tumblr.com/bc63289eea46b6a7d03e08ab3d4cb494/tumblr_mhjyzsQfYU1rfjowdo1_500.gif"
            }
            alt={state.title}
            className="h-full w-full object-cover"
          /> */}
        </div>
        <div className="flex flex-1 flex-col text-[.7rem] font-bold text-black">
          <p className="line-clamp-2">{state.title}</p>
        </div>
        <audio
          ref={audioEl}
          controls
          className="hidden"
          src="/Di Young - Pixel Pig (Ahmad Irfan Remix) [i3RgYbEOABk].mp3"
          autoPlay={false}
        />
        <canvas ref={canvasRef} className="h-[25px] w-[100px] sm:w-[120px]" />
        <div className="mr-[5px] flex gap-[10px] *:cursor-pointer">
          <div
            //   onClick={togglePlay}
            className="[*>path]:fill-black *:w-[20px]"
          >
            {state.isPlay ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2m7 0a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M10.396 18.433L17 12l-6.604-6.433A2 2 0 0 0 7 7v10a2 2 0 0 0 3.396 1.433"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      {!isReady && (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="matrix(0 0 0 0 12 12)"
            >
              <animateTransform
                id="svgSpinnersPulseRings30"
                attributeName="transform"
                begin="0;svgSpinnersPulseRings32.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="translate"
                values="12 12;0 0"
              />
              <animateTransform
                additive="sum"
                attributeName="transform"
                begin="0;svgSpinnersPulseRings32.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="scale"
                values="0;1"
              />
              <animate
                attributeName="opacity"
                begin="0;svgSpinnersPulseRings32.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="1;0"
              />
            </path>
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="matrix(0 0 0 0 12 12)"
            >
              <animateTransform
                id="svgSpinnersPulseRings31"
                attributeName="transform"
                begin="svgSpinnersPulseRings30.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="translate"
                values="12 12;0 0"
              />
              <animateTransform
                additive="sum"
                attributeName="transform"
                begin="svgSpinnersPulseRings30.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="scale"
                values="0;1"
              />
              <animate
                attributeName="opacity"
                begin="svgSpinnersPulseRings30.begin+0.4s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="1;0"
              />
            </path>
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
              transform="matrix(0 0 0 0 12 12)"
            >
              <animateTransform
                id="svgSpinnersPulseRings32"
                attributeName="transform"
                begin="svgSpinnersPulseRings30.begin+0.8s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="translate"
                values="12 12;0 0"
              />
              <animateTransform
                additive="sum"
                attributeName="transform"
                begin="svgSpinnersPulseRings30.begin+0.8s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                type="scale"
                values="0;1"
              />
              <animate
                attributeName="opacity"
                begin="svgSpinnersPulseRings30.begin+0.8s"
                calcMode="spline"
                dur="1.2s"
                keySplines=".52,.6,.25,.99"
                values="1;0"
              />
            </path>
          </svg>
        </div>
      )}
    </div>
  );
};
