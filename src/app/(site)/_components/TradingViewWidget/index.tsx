"use client";

import React, {useEffect, useRef, memo} from "react";

function TradingViewWidget() {
	const container = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
        {
          "autosize": true,
          "symbol": "CAPITALCOM:GOLD",
          "interval": "D",
          "timezone": "Asia/Ho_Chi_Minh",
          "theme": "dark",
          "style": "1",
          "locale": "vi_VN",
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
		container.current?.appendChild(script);
	}, []);

	return (
		<div
			className="tradingview-widget-container"
			ref={container}
			style={{height: "100%", width: "100%"}}
		>
			<div
				className="tradingview-widget-container__widget"
				style={{height: "calc(100% - 32px)", width: "100%"}}
			></div>
		</div>
	);
}

export default memo(TradingViewWidget);
