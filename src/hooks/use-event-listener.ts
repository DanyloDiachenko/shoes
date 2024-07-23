import { useRef, useEffect } from 'react';

type EventType = 'click' | 'pointerdown';
type Options = {
	eventType?: EventType;
	insideHandler?: (e: Event) => void;
	outsideHandler?: (e: Event) => void;
};

export const useEventListener = <E extends HTMLElement>({
	eventType = 'click',
	insideHandler,
	outsideHandler
}: Options) => {
	const ref = useRef<E>(null);

	useEffect(() => {
		const eventHandler = (e: Event) => {
			const target = e.target as E;
			const el = ref.current;
			if (!el) return;
			if (target && el.contains(target)) {
				insideHandler?.(e);
			} else {
				outsideHandler?.(e);
			}
		};

		document.addEventListener(eventType, eventHandler);
		return () => document.removeEventListener(eventType, eventHandler);
	}, [eventType, insideHandler, outsideHandler]);

	return { ref };
};
