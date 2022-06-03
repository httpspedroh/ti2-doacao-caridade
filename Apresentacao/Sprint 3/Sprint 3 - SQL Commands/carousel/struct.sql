--
-- PostgreSQL database dump
--

-- Dumped from database version 12.10 (Ubuntu 12.10-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.10 (Ubuntu 12.10-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: carousel; Type: TABLE; Schema: public; Owner: ti2cc
--

CREATE TABLE public.carousel (
    id integer NOT NULL,
    image_url character varying(100) NOT NULL,
    description character varying(100) NOT NULL
);


ALTER TABLE public.carousel OWNER TO ti2cc;

--
-- Name: carousel_id_seq; Type: SEQUENCE; Schema: public; Owner: ti2cc
--

CREATE SEQUENCE public.carousel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carousel_id_seq OWNER TO ti2cc;

--
-- Name: carousel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ti2cc
--

ALTER SEQUENCE public.carousel_id_seq OWNED BY public.carousel.id;


--
-- Name: carousel id; Type: DEFAULT; Schema: public; Owner: ti2cc
--

ALTER TABLE ONLY public.carousel ALTER COLUMN id SET DEFAULT nextval('public.carousel_id_seq'::regclass);


--
-- Name: carousel carousel_pkey; Type: CONSTRAINT; Schema: public; Owner: ti2cc
--

ALTER TABLE ONLY public.carousel
    ADD CONSTRAINT carousel_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

