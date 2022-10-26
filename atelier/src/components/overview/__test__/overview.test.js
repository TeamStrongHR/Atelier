import { render, screen, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import Overview from '../Overview.js';
import axios from 'axios';
import {DummyCurrentData, DummyCurrentProduct} from './dummyData';
jest.mock('axios');


describe('comprehensive overview widget test', () => {
    afterEach(() => {
      cleanup()
    });


    it("Should render all the components in Overview widget", async () => {

      render(<Overview currentData={DummyCurrentData}/>);
      const navbar = screen.getByTestId('navbar');
      const imageGallery = screen.getByTestId('image-gallery');
      const productSummary = screen.getByTestId('product-summary');
      const slogan = screen.getByTestId('slogan');

      expect(imageGallery).toBeTruthy();
      expect(navbar).toBeTruthy();
      expect(productSummary).toBeTruthy();
      expect(slogan).toBeTruthy();
    });

    it("Thumbnail should have same number as the photos given, thumbnail navigation buttons should exist", async ()=>{
      render(<Overview currentData={DummyCurrentData}/>);
      const thumbnail = screen.getAllByTestId('thumbnail');
      const thumbnailNext = screen.getByTestId('thumbnail-next');
      const thumbnailprevious = screen.getByTestId('thumbnail-previous');

      expect(thumbnail.length).toEqual(6);
      expect(thumbnailNext).toBeTruthy();
      expect(thumbnailprevious).toBeTruthy();
    })
  });


