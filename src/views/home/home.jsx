import React, { useState, useEffect, useCallback } from 'react';
import './home.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactPhotoSphereViewer, MarkersPlugin, AutorotatePlugin  } from 'react-photo-sphere-viewer';
import { panoViews, panoRoutes } from './const'; // 导入所有图片
import arrow from '../../assets/icon/arrow.gif';
import map from '../../assets/map/map.jpg';

import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';

import { LocationOn, LocationOff, Edit, EditOff, MusicNote, MusicOff, Microsoft, ScreenShare } from '@mui/icons-material';

import QRCode from 'qrcode.react';
import VisualAngle from './components/visualAngle';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const sceneId = searchParams.get('scene_id') ?? "rukou"; // 获取 URL 中的 scene_id 参数

  const [markerDetailPopImgSrc, setMarkerDetailPopImgSrc] = useState("");
  const [isMarkerDetailPopOpen, setIsMarkerDetailPopOpen] = useState(false);

  const url = window.location.href;

  const handleMarkerDetailPopClose = () => {
    setIsMarkerDetailPopOpen(false);
    setMarkerDetailPopImgSrc("");
  };

  // 根据 scene_id 的值选择对应的图片，如果找不到则默认使用 rukou
  const [imageSrc, setImageSrc] = useState(panoViews[sceneId]?.pano || panoViews["rukou"].pano);

  const goToScene = (sceneId) => {
    navigate(`?scene_id=${sceneId}`); // navigate(`?scene_id=${sceneId}`);
  };

  const viewerRef = React.useRef(null);
  const viewerInstance = React.useRef(null);

  const handleReady = (instance) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    viewerInstance.current = instance;
    if (!markersPlugs) return;

    markersPlugs.showAllTooltips();
    markersPlugs.addEventListener("select-marker", (e) => {
        console.log(e);
        const markerTo = e.marker?.config?.navigate;
        if(markerTo) {
            goToScene(markerTo);
        }
    });

    markersPlugs.addEventListener("select-marker", (e) => {
      if(e.marker?.config?.mt === 'graph') {
        const config = e.marker.config;
        if(config.pop) {
          setMarkerDetailPopImgSrc(config.pop);
          setIsMarkerDetailPopOpen(true);
        }
        return;
      }
      const markerTo = e.marker?.config?.navigate;
      if(markerTo) {
          goToScene(markerTo);
      }
    });

    markersPlugs.addEventListener("enter-marker", (e) => {
      if(e.marker?.config?.mt === 'graph') {
        const config = e.marker.config;
        config.svgStyle = {
          "fill": "rgba(255, 165, 0, 0.3)", // 半透明橙色填充
        };
        markersPlugs.updateMarker(config);
      }

    });

    markersPlugs.addEventListener("leave-marker", (e) => {
      if(e.marker?.config?.mt === 'graph') {
        const config = e.marker.config;
        config.svgStyle = {
          "fill": "rgba(0, 0, 0, 0)",
        };
        markersPlugs.updateMarker(config);
      }
    });

    instance.addEventListener("click", handleClick);

    const currentMarkers = panoViews[sceneId]?.markers;
    if(currentMarkers && currentMarkers.length > 0) {
        markersPlugs.setMarkers(currentMarkers);
    }
  };
  // 配置插件
  const plugins = [
      [
        MarkersPlugin,
        {
            markers: [],
        },
      ],
      // [CompassPlugin, {
      //   hotspots: [
      //     { yaw: '0deg' },
      //     { yaw: '90deg' },
      //     { yaw: '180deg' },
      //     { yaw: '270deg' },
      //   ],
      // }],
      [
        AutorotatePlugin,
        {
          autostartDelay: 3000,
          autostartOnIdle: true,
          autorotateSpeed: '1rpm',
        }
      ]
  ];

  // 状态
  const [isAddMarker, setIsAddMarker] = useState(false); // 是否可添加marker
  const [isAddMarkerFormOpen, setIsAddMarkerFormOpen] = useState(false);  // 单个标记添加dialog
  const [addPosition, setAddPosition] = useState({yaw: 0, pitch: 0});  // 单标位置

  const [isAltPressed, setIsAltPressed] = useState(false); // 是否按下alt
  const [altMarkerId, setAltMarkerId] = useState('');
  const [isAddMarkerGraphFormOpen, setIsAddMarkerGraphFormOpen] = useState(false); // 图形dialog

    // 处理点击事件以添加标记
    const handleClick = useCallback((event) => {
        if(!event) return;
        if(!isAddMarker) return;
        const yaw = event.data.yaw;
        const pitch = event.data.pitch;

        if(isAltPressed) {
            const markersPlugs = viewerRef.current?.getPlugin(MarkersPlugin);
            if (!markersPlugs)  return;
            if(altMarkerId === '') {
            // 创建新标记
              const newMarkerId = `marker_${Date.now()}`;
              setAltMarkerId(newMarkerId);
              const newMarker = {
                  id: newMarkerId,
                  polygon: [
                    [yaw, pitch], // 第一个点的纬度、经度
                  ],
                  "svgStyle": {
                    "fill": "rgba(0, 0, 0, 0)",
                  },
                  tooltip: {
                    content: "",
                    position: "top center",
                  },
                  "mt": "graph"
              };
              markersPlugs.addMarker(newMarker);
            } else {
              const markerConfig = markersPlugs.getMarker(altMarkerId);
              markerConfig.config.polygon.push([yaw, pitch]);
              markersPlugs.updateMarker(markerConfig.config);
            }
            return;
        }
        setAddPosition({ yaw, pitch });
        setIsAddMarkerFormOpen(true);
    }, [isAltPressed, isAddMarker, altMarkerId]);
    // 关闭事件
    const handleAddMarkerFormClose = () => {
        setIsAddMarkerFormOpen(false);
    }

    const handleAddMarkerGraphFormClose = () => {
      const markersPlugs = viewerRef.current?.getPlugin(MarkersPlugin);
      if (!markersPlugs)  return;
      markersPlugs.removeMarker(altMarkerId);
      setAltMarkerId('');
      setIsAddMarkerGraphFormOpen(false);
    }

    // 提交事件
    const handleAddMarkerFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());

        // 创建新标记
        const newMarker = {
            id: `marker_${Date.now()}`,
            position: addPosition,
            html: `<img src='${arrow}' style='width: 50px; height: 50px; transform: rotate(0deg);'/>`,
            anchor: "bottom center",
            size: { width: 50, height: 50 },
            tooltip: formJson.tooltip,
            navigate: formJson.to
        };

        const markersPlugs = viewerRef.current?.getPlugin(MarkersPlugin);
        if (!markersPlugs)  return;
        markersPlugs.addMarker(newMarker);
        console.log(newMarker);
        handleAddMarkerFormClose();
    }

    const handleAddMarkerGraphFormSubmit = (event) => {
      event.preventDefault();
      if(altMarkerId === '') return;
      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries((formData).entries());
      const markersPlugs = viewerRef.current?.getPlugin(MarkersPlugin);
      if (!markersPlugs)  return;
      const markerConfig = markersPlugs.getMarker(altMarkerId);
      if(formJson.tooltip) {
        markerConfig.config.tooltip.content = formJson.tooltip;
      } else {
        markerConfig.config.tooltip = undefined;
      }
      markerConfig.config.pop = formJson.pop;
      markersPlugs.updateMarker(markerConfig.config);
      console.log(markerConfig.config);
      setAltMarkerId('');
      setIsAddMarkerGraphFormOpen(false);
    }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sceneId = searchParams.get('scene_id'); // 获取 URL 中的 scene_id 参数
    setImageSrc(panoViews[sceneId]?.pano || panoViews["rukou"].pano);
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey) {
        setIsAltPressed(true);
      }
    };
  
    const handleKeyUp = (e) => {
      if (!e.altKey) {
        setIsAltPressed(false);
        if(altMarkerId === '') return;
        setIsAddMarkerGraphFormOpen(true); // 打开添加标记的表单
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [altMarkerId]);

  useEffect(() => {
    if(viewerInstance.current) {
      viewerInstance.current.removeEventListener('click', handleClick);
      viewerInstance.current.addEventListener('click', handleClick);
    };
    return () => {
      if(viewerInstance.current) {
        viewerInstance.current.removeEventListener('click', handleClick);
      }
    }
  }, [isAddMarker, isAltPressed, altMarkerId, handleClick]);

  const [isMapView, setIsMapView] = useState(true);
  const audioRef = React.useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    const playAudio = async () => {
      if(localStorage.getItem('autoplayAllowed') === 'true') {
        if (audioRef.current) {
          try {
            if(isPlay) {
              await audioRef.current.play();
            } else {
              await audioRef.current.pause();
            }
          } catch (error) {
            console.error("Audio play failed", error);
          }
        }
      }
    };
  
    playAudio();
  }, [isPlay]);

  useEffect(() => {
    const markersPlugs = viewerRef.current?.getPlugin(MarkersPlugin);
    if (!markersPlugs)  return;
    markersPlugs.clearMarkers();
  }, [sceneId]);
  
  // 配置自定义按钮
  const navBars = [
    'autorotate', 'zoom', 'fullscreen',
  ];

  // 显示场景选择
  const [isSceneSelect, setIsSceneSelect] = useState(true);
  const handleChangeIsSceneSelect = () => {
    setIsSceneSelect(i => !i);
  }

  // 分享链接
  const [isShare, setIsShare] = useState(false);
  const handleToShare = () => {
    setIsShare(true);
  }
  const handleToCloseShare = () => {
    setIsShare(false);
  }

  const [angle, setAngle] = useState(0);
  const [isSetAngle, setIsSetAngle] = useState(false);
  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  }
  
  useEffect(() => {
    let animationFrameId;
  
    const updateAngle = () => {
      if (viewerInstance.current) {
        const degrees = viewerInstance.current.getPosition();
        const newAngle = radiansToDegrees(degrees.yaw);
        // 只有当角度变化足够大时才更新
        if (Math.abs(angle - newAngle) > 0.1) {
          setAngle(newAngle);
        }
      }
      animationFrameId = requestAnimationFrame(updateAngle);
    };
  
    animationFrameId = requestAnimationFrame(updateAngle);

    if(viewerRef.current && isSetAngle) {
      viewerRef.current.animate({
        yaw: degreesToRadians(angle),
        pitch: viewerRef.current?.getPosition()?.pitch ?? 0 
      });
    }
  
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [angle, isSetAngle]);
  
  return (
    <div className='rpsv'>
        <div className="map-container" style={{right: isMapView ? '60px' : '-300px', overflow: 'hidden'}}>
            <img className='map-bg' src={map} alt="map"/>
            {
                panoRoutes.map(v => <Tooltip title={panoViews[v].title} placement="top">
                        <div key={v} className="map-point" style={{
                            bottom: `calc(${panoViews[v].position.bottom} - 7.5px)`,
                            left: `calc(${panoViews[v].position.left} - 7.5px)`,
                            background: sceneId === v ? 'red' : 'rgb(0, 115, 255)',
                        }} onClick={() => goToScene(v)}></div>
                    </Tooltip>
                )
            }
            <VisualAngle bottom={`calc(${panoViews[sceneId].position.bottom} - 65px)`} left={`calc(${panoViews[sceneId].position.left})`} angle={angle} setAngle={setAngle} setIsSetAngle={setIsSetAngle} />
        </div>
        <div className='side-btns'>
          {/* <IconButton aria-label="edit" onClick={(a) => {
            setIsAddMarker(a => !a);
          }}>
            {isAddMarker ? <EditOff/> : <Edit />}
          </IconButton> */}
          <IconButton aria-label="map" onClick={(a) => {
            setIsMapView(v => !v);
          }}>
            {isMapView ? <LocationOn /> : <LocationOff/>}
          </IconButton>
          <IconButton aria-label="music" onClick={(a) => {
            setIsPlay(p => !p);
          }}>
            {isPlay ? <MusicNote /> : <MusicOff/>}
          </IconButton>
          <IconButton aria-label="yard" onClick={handleChangeIsSceneSelect}>
            <Microsoft />
          </IconButton>
          <IconButton aria-label="yard" onClick={handleToShare}>
            <ScreenShare />
          </IconButton>
        </div>
        <audio ref={audioRef}  controls="controls" style={{display: 'none'}}>
          <source  src="https://bpic.588ku.com/music/yinyue/water/30f99a96-660e-4bf1-b423-34296b0fe858.mp3" autoPlay/>
          Your browser does not support the audio element.
        </audio>
        <Fade in={isSceneSelect}>
          <div className="image-scroll-container" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <div className='image-container'>
              {panoRoutes.map((v, index) => (
                <Tooltip key={v} title={panoViews[v].title} placement="top">
                  <div style={{padding: 3, margin: '3 0', background: sceneId === v ? '#F6B64C' : 'white', cursor: 'pointer', position: 'relative'}} onClick={() => goToScene(v)}>
                    <img
                      src={panoViews[v].thumb}
                      alt={panoViews[v].title}
                      style={{ width: '86px', height: 'auto', display: 'block' }}
                    />
                    <div className='title'>{panoViews[v].title}</div>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </Fade>
        <ReactPhotoSphereViewer 
            key={imageSrc}
            src={imageSrc}
            ref={viewerRef} 
            // onClick={isAddMarker ? handleClick : null}
            onReady={handleReady}
            plugins={plugins}
            height={'100vh'}
            width={"100%"}
            littlePlanet={false}
            navbar={navBars}
        ></ReactPhotoSphereViewer>
        <Dialog
            open={isAddMarkerFormOpen}
            onClose={handleAddMarkerFormClose}
            PaperProps={{
            component: 'form',
            onSubmit: handleAddMarkerFormSubmit,
            }}
        >
            <DialogTitle>添加标记</DialogTitle>
            <DialogContent>
            <DialogContentText>
                请为此标记添加提示
            </DialogContentText>
            <TextField
                autoFocus
                required
                margin="dense"
                id="tooltip"
                name="tooltip"
                label="提示"
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                required
                margin="dense"
                id="to"
                name="to"
                label="链接"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleAddMarkerFormClose}>取消</Button>
            <Button type="submit">添加</Button>
            </DialogActions>
        </Dialog>
        <Dialog
            open={isAddMarkerGraphFormOpen}
            onClose={handleAddMarkerGraphFormClose}
            PaperProps={{
            component: 'form',
            onSubmit: handleAddMarkerGraphFormSubmit,
            }}
        >
            <DialogTitle>添加图形</DialogTitle>
            <DialogContent>
            <DialogContentText>
                请为此标记添加图形提示
            </DialogContentText>
            <TextField
                autoFocus
                
                margin="dense"
                id="提示"
                name="tooltip"
                label="提示"
                fullWidth
                variant="standard"
            />
            <TextField
                autoFocus
                required
                margin="dense"
                id="pop"
                name="pop"
                label="配图"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleAddMarkerGraphFormClose}>取消</Button>
            <Button type="submit">添加</Button>
            </DialogActions>
        </Dialog>
        <Dialog
          open={isMarkerDetailPopOpen}
          onClose={handleMarkerDetailPopClose}
        >
          <img src={markerDetailPopImgSrc} style={{zIndex: 120, width: 500}} alt="" />
        </Dialog>
        <Dialog
          open={isShare}
          onClose={handleToCloseShare}
        >
          <DialogTitle>使用手机扫描二维码, 分享你的全景</DialogTitle>
          <DialogContent>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <QRCode size={230} value={url} />
            </div>
          </DialogContent>
        </Dialog>
    </div>
  );
}
