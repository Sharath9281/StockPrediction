import React, { useEffect, useState, useContext } from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GraphContext } from '../context/LivegraphContext';
import axios from 'axios';

const LiveGraph = () => {
  const { companyId } = useContext(GraphContext);
  console.log(companyId);
  const [stockData, setStockData] = useState(null);
  const [symbol, setSymbol] = useState('TATAMOTORS');


  const fetchData = async () => {
    try {
      const response = await axios.put('/api/stock/intraday', {
          companyID: companyId
      });
      const data = await response.data;
      console.log(data)
      const timeSeries = data['Time Series (Daily)'];
      const latestData = Object.entries(timeSeries)[0][1];
      setStockData(latestData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol, fetchData], 500000);

  const handleCardClick = (newSymbol) => {
    setSymbol(newSymbol);
  };

  return (
    <div>
      <section className="hero-section bg-light mb-3">
        <div className="container2">
          <h2>Live Graph</h2>
          <div className="tradingview-widget-container2">
            {companyId && <TradingViewWidget
              symbol={companyId}
              interval="1"
              timezone="Etc/UTC"
              theme="dark"
              style="2"
              locale="en"
              enablePublishing={false}
              allowSymbolChange={true}
              calendar={false}
            />}
          </div>
        </div>
      </section>

      <section className="stock-details-section">
        <h3 className="text-center mb-5">Stock Details</h3>
        <div className="container2">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">Open: <span id="openValue" className={`numeric ${stockData?.['1. open'] ? 'green' : ''}`}>{stockData?.['1. open']}</span></h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">Prev.Close: <span id="prevCloseValue" className={`numeric ${stockData?.['4. close'] ? 'green' : ''}`}>{stockData?.['4. close']}</span></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">Volume: <span id="volumeValue" className={`numeric ${stockData?.['5. volume'] ? 'green' : ''}`}>{stockData?.['5. volume']}</span></h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">Adj.Close: <span id="adjCloseValue" className={`numeric ${stockData?.['5. adjClose'] ? 'green' : ''}`}>{stockData?.['5. adjClose']}</span></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">Today's Low: <span id="todayLowValue" className={`numeric ${stockData?.['3. low'] ? 'green' : ''}`}>{stockData?.['3. low']}</span></h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">Today's High: <span id="todayHighValue" className={`numeric ${stockData?.['2. high'] ? 'green' : ''}`}>{stockData?.['2. high']}</span></h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">52-Week Low: <span id="52WeekLowValue" className="numeric text-primary">N/A</span></h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 mx-auto">
              <div className="card mb-5" data-toggle="popover">
                <div className="card-body">
                  <h5 className="card-title">52-Week High: <span id="52WeekHighValue" className="numeric text-primary">N/A</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more-details-section mb-5">
        <div className="container3">
          {/* Prediction buttons */}
          <button className="btn btn-primary mb-5 d-block mx-auto" style={{ marginTop: '30px', height: '40px', width: '170px' }} id="predictBtn">
            Predict
          </button>
        </div>
      </section>

      <div className="container3">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <div className="card mb-5" id="card1" onClick={() => handleCardClick('TATAMOTORS')}>
              <div className="card-body">
                <h5 className="card-title">GOOG</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-auto">
            <div className="card mb-5" id="card2" onClick={() => handleCardClick('AAPL')}>
              <div className="card-body">
                <h5 className="card-title">AAPL</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-auto">
            <div className="card mb-5" id="card3" onClick={() => handleCardClick('TSLA')}>
              <div className="card-body">
                <h5 className="card-title">TSLA</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-auto">
            <div className="card mb-5" id="card4" onClick={() => handleCardClick('IBM')}>
              <div className="card-body">
                <h5 className="card-title">IBM</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveGraph;