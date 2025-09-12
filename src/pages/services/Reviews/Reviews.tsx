import { TabBar } from "../../../components/TabBar/TabBar";
import type { TabBarProps, Review } from "../../../types/types";
import { Beta } from "../../../components/Beta/Beta";
import { useState, useEffect } from "react";
// import * as Component from './component/components'
import { motion } from "framer-motion";
import { ArrowBack, Quest } from "./component/iconReviews/SvgReviews";
// import * as Anim from './Animation/Animation'

const raw = import.meta.env.VITE_REVIEWS_DATA
let reviews: Review[] = []

try {
    reviews = raw ? JSON.parse(raw) : []
} catch(error) {
    console.warn('Invalid JSON', error)
    reviews = []
}

const buttonStyles = {
    className: "w-[30px] h-[30px] flex items-center justify-center rounded-xl",
    style: { 
        background: 'linear-gradient(135deg,rgba(143, 88, 210, 0.04),rgba(122, 61, 183, 0.5),rgba(168, 74, 166, 0.28))',
        opacity: 0.9
    }
}

function Reviews({ activeTab, onChange, sizeDevice }: TabBarProps) {
    
    const [voiceMessages, setVoiceMessages] = useState<Set<number>>(new Set())
    const [loadingReviews, setLoadingReviews] = useState<Set<number>>(new Set())
    const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set())
    const [expandedVoiceReviews, setExpandedVoiceReviews] = useState<Set<number>>(new Set())

    const proccesingVoiseMessage = (reviewId: number) => {
        if (loadingReviews.has(reviewId) || voiceMessages.has(reviewId)) return

        setLoadingReviews(prev => new Set(prev).add(reviewId))

        const random = Math.floor(Math.random() * 5) + 1
        console.log(random)

        const timer = setTimeout(() => {
            setLoadingReviews(prev => {
                const newSet = new Set(prev)
                newSet.delete(reviewId)
                return newSet
            })
            setVoiceMessages(prev => new Set(prev).add(reviewId))
        }, random * 1000)

        return () => {
            clearTimeout(timer)
        }
    }

    const truncateText = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text
        
        const truncated = text.substring(0, maxLength)
        const lastSpaceIndex = truncated.lastIndexOf(' ')
        
        return lastSpaceIndex > 0 ? truncated.substring(0, lastSpaceIndex) + '...' : truncated + '...'
    }

    const toggleExpanded = (reviewId: number) => {
        setExpandedReviews(prev => {
            const newSet = new Set(prev)
            if (newSet.has(reviewId)) {
                newSet.delete(reviewId)
            } else {
                newSet.add(reviewId)
            }
            return newSet
        })
    }

    const toggleVoiceExpanded = (reviewId: number) => {
        setExpandedVoiceReviews(prev => {
            const newSet = new Set(prev)
            if (newSet.has(reviewId)) {
                newSet.delete(reviewId)
            } else {
                newSet.add(reviewId)
            }
            return newSet
        })
    }

    return (
    <div
        className="w-screen max-w-screen h-screen max-h-screen flex flex-col items-center
        bg-gradient-to-br from-[#1a2337] via-[#283761] to-[#4d5985] isolate
    "
    >


        <div 
            className="flex-1 flex flex-col pt-10 overflow-y-auto items-center"
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none"
            }}
        >
            <style>
                {`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
            <div
                className="w-full flex justify-center text-center py-2 mb-5 gap-2 items-start flex-col"
            >
                <h1
                    style={{ fontFamily: 'Unbounded, sans-serif' }}
                    className="text-center md:inline-block 
                        text-violet-400 text-2xl font-semibold
                        text-shadow-[2px_2px_4px_rgba(26,11,46,0.8)]
                    "
                >
                    {'Мои отзывы'.toUpperCase()}
                </h1>
                <div
                    className="w-full h-[30px] flex items-center justify-start rounded-xl"
                    
                >
                    <div
                        {...buttonStyles}
                    >
                        <ArrowBack onChange={() => onChange?.('services')} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className={`bg-white/5 hover:bg-white/10 transition-all duration-300 flex-col flex
                            shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-60 border border-white/10 rounded-xl p-4 ${
                                expandedReviews.has(review.id) ? 'h-auto' : 'h-auto'
                            }`}
                        style={{
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            background: 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <p
                            className="text-white text-base font-normal"
                            style={{ fontFamily: 'Unbounded, sans-serif' }}
                        >
                            {review.author}
                        </p>
                        <div>
                            {review.voice ? (
                                <>
                                    <div
                                        className="flex justify-between items-center"
                                    >
                                        <p 
                                            className="text-white/90 text-[12.5px] font-normal"
                                            style={{ fontFamily: 'Unbounded, sans-serif' }}
                                        >
                                            Голосовой отзыв
                                        </p>
                                        <div
                                            className={`bg-white/15 w-12 h-7 flex items-center rounded-md justify-center gap-1 transition-all duration-500 ${
                                                loadingReviews.has(review.id)
                                                    ? 'border-2 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.5)]' 
                                                    : 'border-2 border-transparent'
                                            }`}
                                            style={{
                                                background: loadingReviews.has(review.id)
                                                    ? 'linear-gradient(45deg, rgba(139,92,246,0.2), rgba(168,85,247,0.1))' 
                                                    : 'rgba(255,255,255,0.15)'
                                            }}
                                        >
                                            <div>
                                                <ArrowBack style='rotate-180' stroke='white' size='18'/>
                                            </div>
                                            <div
                                                className="text-white text-[15px]"
                                                onClick={() => proccesingVoiseMessage(review.id)}
                                            >
                                                A
                                            </div>
                                        </div>
                                    </div>
                                    {loadingReviews.has(review.id) && (
                                        <div>
                                            ...
                                        </div>
                                    )}
                                    {voiceMessages.has(review.id) && (
                                        <div className="flex flex-col gap-2">
                                            <div className="text-white/90 text-sm">
                                                {expandedVoiceReviews.has(review.id) ? review.textvoice : truncateText(review.textvoice || '')}
                                            </div>
                                            {review.textvoice && review.textvoice.length > 150 && (
                                                <button
                                                    onClick={() => toggleVoiceExpanded(review.id)}
                                                    className="text-violet-400 text-xs hover:text-violet-300 transition-colors duration-200 self-start flex items-center gap-1"
                                                    style={{ fontFamily: 'Unbounded, sans-serif' }}
                                                >
                                                    {expandedVoiceReviews.has(review.id) ? (
                                                        <>
                                                            <span>Свернуть</span>
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M18 15l-6-6-6 6"/>
                                                            </svg>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Читать далее</span>
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M6 9l6 6 6-6"/>
                                                            </svg>
                                                        </>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </>
                            ): (
                                <div className="flex flex-col gap-2">
                                    <div className="text-white/90 text-sm">
                                        {expandedReviews.has(review.id) ? review.text : truncateText(review.text)}
                                    </div>
                                    {review.text.length > 150 && (
                                        <button
                                            onClick={() => toggleExpanded(review.id)}
                                            className="text-violet-400 text-xs hover:text-violet-300 transition-colors duration-200 self-start flex items-center gap-1"
                                            style={{ fontFamily: 'Unbounded, sans-serif' }}
                                        >
                                            {expandedReviews.has(review.id) ? (
                                                <>
                                                    <span>Свернуть</span>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 15l-6-6-6 6"/>
                                                    </svg>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Читать далее</span>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M6 9l6 6 6-6"/>
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="italic text-white/60 text-sm">
            Отзывы импортируются из Telegram API
        </div>

        <div className="flex flex-col gap-1 justify-end py-2">
            <TabBar 
                activeTab={activeTab} 
                onChange={onChange}
            />
            <div
                className={`w-full flex px-8 ${sizeDevice?.device ? 'justify-end' : 'justify-center'}`}
            >
                <Beta />
            </div>
        </div>
    </div>
    )
}

export default Reviews