"use client";
import React, { useEffect, useRef, useState } from "react";
import ThreeGlobe from "three-globe";
import * as THREE from "three";
import TrackballControls from "three-trackballcontrols";
import { FaSearch } from "react-icons/fa";

const Globe = () => {
  const divRef = useRef(null);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    if (countries) return;

    fetch(
      "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, [countries]);

  useEffect(() => {
    if (typeof window === "undefined" || !divRef.current || !countries) return;

    const globe = new ThreeGlobe()
      .showGlobe(false)
      .globeMaterial(new THREE.MeshBasicMaterial({
        color: 0x00000000, // Black color
        opacity: 0.5, // Fully transparent
        transparent: true,
      }))
      .polygonsData(
        countries.features.filter((d) => d.properties.ISO_A2 !== "AQ")
      )
      .polygonCapColor(() => "rgba(0, 0, 0,0)")
      .polygonSideColor(() => "rgba(0, 0, 0, 0.7)")
      .polygonStrokeColor(() => "#FF5900");

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(divRef.current.clientWidth, divRef.current.clientHeight);
    divRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(100, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00000000,
      opacity: 0,
      transparent: true,
      side: THREE.BackSide, // Render the inside of the sphere
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    scene.add(globe);
    scene.add(new THREE.AmbientLight(0xbbbbbb));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

    const camera = new THREE.PerspectiveCamera();
    camera.aspect = divRef.current.clientWidth / divRef.current.clientHeight;
    camera.updateProjectionMatrix();
    camera.position.z = 500;

    const tbControls = new TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 5;
    tbControls.zoomSpeed = 0.8;

    const animate = () => {
      tbControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (divRef.current) {
        divRef.current.removeChild(renderer.domElement);
      }
    };
  }, [countries]);

  return (
    <div
      id="globeViz"
      ref={divRef}
      style={{
        background: "transparent",
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    ></div>
  );
};

export default Globe;
