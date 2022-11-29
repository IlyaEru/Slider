import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import React from 'react';
import {
  StyledReviewName,
  StyledReviewQuote,
  StyledReviewTitle,
  StyledReviewView,
} from './ReviewView.style';

interface ReviewViewProps {
  name: string;
  title: string;
  image: string;
  quote: string;

  active: boolean;
  nextSlide?: boolean;
  prevSlide?: boolean;
}

export default function ReviewView({
  name,
  title,
  image,
  quote,

  active,
  nextSlide,
  prevSlide,
}: ReviewViewProps) {
  return (
    <StyledReviewView
      className={`${active ? 'active-slide' : ''} 
    ${nextSlide ? 'next-slide' : ''} ${prevSlide ? 'prev-slide' : ''}`}
    >
      <Image
        className="review-view__review-img"
        src={image}
        alt={name}
        width={150}
        height={150}
      />
      <StyledReviewName>{name}</StyledReviewName>
      <StyledReviewTitle>{title}</StyledReviewTitle>
      <StyledReviewQuote>{quote}</StyledReviewQuote>
      <FaQuoteRight className="review-view__quote-icon" />
    </StyledReviewView>
  );
}
