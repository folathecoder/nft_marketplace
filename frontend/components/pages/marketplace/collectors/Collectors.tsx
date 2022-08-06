import React from 'react';
import Image from 'next/image';
import {
  CollectorContainer,
  CollectorSlider,
  Collector,
  CollectorImage,
  CollectorDetail,
} from 'components/pages/marketplace/collectors/CollectorsStyles';
import { collectors } from 'cms/marketplace/collectors';

const Collectors = () => {
  return (
    <CollectorContainer>
      <div>
        <h2>Top Collectors</h2>
      </div>
      <CollectorSlider>
        <div>
          {collectors.map((item, index) => (
            <Collector key={item.id}>
              <CollectorImage>
                <Image
                  src={item.collectorImage}
                  alt={item.collectorName}
                  layout="responsive"
                />
              </CollectorImage>
              <CollectorDetail>
                <p>
                  <span>
                    <i className="fa-solid fa-badge-check"></i>
                  </span>
                  {item.collectorName}
                </p>
              </CollectorDetail>
            </Collector>
          ))}
        </div>
      </CollectorSlider>
    </CollectorContainer>
  );
};

export default Collectors;
