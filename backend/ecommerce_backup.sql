--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 17.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Category" (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    image_link character varying(250) NOT NULL,
    created_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_date timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Category" OWNER TO postgres;

--
-- Name: Category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Category_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Category_id_seq" OWNER TO postgres;

--
-- Name: Category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Category_id_seq" OWNED BY public."Category".id;


--
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    sku character varying(10) NOT NULL,
    category_id integer NOT NULL,
    description character varying(250) NOT NULL,
    large_description character varying(500) NOT NULL,
    price double precision NOT NULL,
    discount_price double precision,
    discount_percent integer,
    is_new boolean,
    image_link character varying(250) NOT NULL,
    other_images_link character varying(1000) NOT NULL,
    created_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_date timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Product_id_seq" OWNER TO postgres;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Category" ALTER COLUMN id SET DEFAULT nextval('public."Category_id_seq"'::regclass);


--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Category" (id, name, image_link, created_date, updated_date) FROM stdin;
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" (id, name, sku, category_id, description, large_description, price, discount_price, discount_percent, is_new, image_link, other_images_link, created_date, updated_date) FROM stdin;
2	Product Name	123456	1	Short description	Detailed description	100	\N	\N	t	http://example.com/image.jpg	http://example.com/other-image.jpg	2024-10-15 01:37:22.003	2024-10-15 01:37:22.003
4	Product Name	123456	4	Short description	Detailed description	100	\N	\N	t	http://example.com/image.jpg	http://example.com/other-image.jpg	2024-10-15 01:45:03.257	2024-10-15 01:45:03.257
5	Product Name	123456	1	Short description	Detailed description	100	\N	\N	t	http://example.com/image.jpg	http://example.com/other-image.jpg	2024-10-15 01:48:55.398	2024-10-15 01:48:55.398
6	Updated Products Name	654321	1	Updated short description	Updated detailed description	120	100	10	f	http://example.com/updated-image.jpg	http://example.com/updated-other-image.jpg	2024-10-15 01:55:52.321	2024-10-15 01:55:52.321
3	Update Product case	123456	3	Short description	Detailed description	100	\N	\N	t	http://example.com/image.jpg	http://example.com/other-image.jpg	2024-10-15 01:38:35.453	2024-10-15 01:57:59.777
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
fea27601-2937-440c-9268-f7bf62222011	14b0d770052c0cc90a4fa810050a28980af5216a9da7f31e01eb9ce787353631	2024-10-14 21:38:32.915975-03	20241015003832_init	\N	\N	2024-10-14 21:38:32.896471-03	1
\.


--
-- Name: Category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Category_id_seq"', 1, false);


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Product_id_seq"', 6, true);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

